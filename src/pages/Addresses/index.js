import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { GOOGLE_API_KEY } from 'react-native-dotenv';
import { useNavigation } from '@react-navigation/native';
import PlacesInput from 'react-native-places-input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/index';
import styles from './styles';

import { Context } from '../../contexts/index';

export default function Addresses(props) {
  const navigation = useNavigation();

  const { user, removeAddress } = useContext(Context);

  const [search, setSearch] = useState('');
  const [addresses, setAddresses] = useState(user.address);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProps = props;

    if (getProps.route.params && getProps.route.params.newAddresses) {
      setAddresses(getProps.route.params.newAddresses);
      setSearch('');
    }
  }, [props]);

  function handleSearch(address, formattedAddress, lat, lng) {
    const data = {
      type: 'create',
      address,
      formattedAddress,
      lat,
      lng,
    };

    function distance(lat1, lon1, lat2, lon2) {
      const p = 0.017453292519943295; // Math.PI / 180
      const c = Math.cos;
      const a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;

      return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    const checkDistance = distance(-22.9497078, -47.1129784, lat, lng);

    if (checkDistance > 50) {
      return Alert.alert('Aviso', 'Desculpe, não atendemos nesse endereço');
    }

    return navigation.navigate('Editar endereço', { data });
  }

  async function handleRemoveAddress(id) {
    setLoading(true);

    const newAddresses = await removeAddress(id);

    setAddresses(newAddresses);

    setLoading(false);
  }

  return (
    <View
      style={styles.container}
    >
      <Header />
      <View style={styles.searchContainer}>
        <PlacesInput
          googleApiKey={GOOGLE_API_KEY}
          placeHolder="Pesquisar endereço"
          language="pt-BR"
          query={search}
          onChangeText={(e) => setSearch(e)}
          queryCountries={['br']}
          onSelect={(place) => handleSearch(
            place.result.name,
            place.result.formatted_address,
            place.result.geometry.location.lat,
            place.result.geometry.location.lng,
          )}
          iconResult={(
            <Icon
              name="location-on"
              size={20}
              color="#CB3F3F"
            />
          )}
          stylesContainer={{
            marginTop: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          stylesInput={{
            width: '100%',
            height: 50,
            fontSize: 21,
            borderColor: '#777',
            borderWidth: 1,
            borderRadius: 4,
            color: '#777',
            padding: 10,
          }}
          stylesItemText={{
            color: '#000',
            marginLeft: '-5%',
          }}
          stylesList={{
            paddingLeft: 25,
            paddingRight: 25,
          }}
          stylesLoading={{
            color: '#CB3F3F',
          }}
        />
      </View>
      <View style={styles.hrContainer}><View style={styles.hr} /></View>
      <View style={styles.addressesContainer}>
        {addresses?.length
          ? (
            <ScrollView style={styles.addressSection}>
              {addresses.map((address) => (
                <View
                  key={address.id}
                  style={styles.addressBox}
                >
                  <View style={styles.addressSeparator}>
                    <View style={styles.addressBoxName}>
                      <Text style={styles.addressText}>
                        {address.address}
                      </Text>
                    </View>
                    <View style={styles.addressBoxConfig}>
                      {loading ? (
                        <ActivityIndicator
                          size={25}
                          color="#CB3F3F"
                          style={{ left: -12 }}
                        />
                      ) : (
                        <TouchableOpacity
                          onPress={() => handleRemoveAddress(address.id)}
                        >
                          <Icon
                            name="delete"
                            size={25}
                            color="#CB3F3F"
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <View style={{ marginTop: 15 }}>
                    <Text style={styles.addressNumber}>
                      {`Número: ${address.number}`}
                    </Text>
                    <Text style={styles.addressComplement}>
                      {address.complement ? `Complemento: ${address.complement}` : ''}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Editar endereço', {
                        data: {
                          type: 'change',
                          id: address.id,
                          address: address.address,
                          formattedAddress: address.formattedAddress,
                          lat: address.lat,
                          lng: address.lng,
                          number: address.number,
                          complement: address.complement,
                        },
                      })}
                    >
                      <Text style={styles.editAddress}>
                        Editar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          )
          : (
            <View style={styles.noAddress}>
              <Text style={styles.textNoAddress}>
                Você ainda não adicionou nenhum endereço
              </Text>
              <Text style={styles.textNoAddress}>
                Digite no campo acima seu endereço
              </Text>
            </View>
          )}
      </View>
    </View>
  );
}
