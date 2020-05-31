import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { GOOGLE_API_KEY } from 'react-native-dotenv';
import PlacesInput from 'react-native-places-input';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header/index';
import styles from './styles';

import { Context } from '../../contexts/index';

export default function Addresses() {
  const { user } = useContext(Context);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSearch(address, formattedAddress, lat, lng) {
    console.log(address, lat, lng);

    setLoading(true);

    user.address = [{
      id: 1,
      location: address,
    }];

    setSearch('');

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
          queryCountries={['br']}
          query={search}
          onChangeText={(e) => setSearch(e)}
          onSelect={(place) => handleSearch(
            place.result.name,
            place.result.formatted_address,
            place.result.geometry.location.lat,
            place.result.geometry.location.lng,
          )}
          iconResult={(
            <Icon
              name="location-pin"
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
            width: '90%',
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
        {user.address?.length
          ? (
            <ScrollView style={styles.addressSection}>
              {user.address.map((address) => (
                <View
                  key={address.id}
                  style={styles.addressBox}
                >
                  <View style={styles.addressSeparator}>
                    <View style={styles.addressBoxName}>
                      <Text style={styles.addressText}>
                        {address.location}
                      </Text>
                    </View>
                    <View style={styles.addressBoxConfig}>
                      <Icon
                        name="trash"
                        size={18}
                        color="#CB3F3F"
                      />
                    </View>
                  </View>
                  <View style={{ ...styles.addressSeparator, marginTop: 15 }}>
                    <TextInput
                      placeholder="Número"
                      style={styles.inputNumber}
                      placeholderTextColor="#777"
                      autoCorrect={false}
                      autoCapitalize="none"
                      returnKeyType="go"
                      onChangeText={() => {}}
                    />
                    <TextInput
                      placeholder="Complemento"
                      style={styles.inputComplement}
                      placeholderTextColor="#777"
                      autoCorrect={false}
                      autoCapitalize="none"
                      returnKeyType="go"
                      onChangeText={() => {}}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.addressButton}
                    onPress={() => {}}
                  >
                    {loading ? (
                      <ActivityIndicator size={25} color="#fff" />
                    ) : (
                      <Text style={styles.addressButtonText}>
                        Salvar
                      </Text>
                    )}
                  </TouchableOpacity>
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
