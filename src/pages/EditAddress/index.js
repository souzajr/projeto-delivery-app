import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/index';
import styles from './styles';

import { Context } from '../../contexts/index';

export default function EditAddress(props) {
  const navigation = useNavigation();

  const { changeOrAddAddress } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(props.route.params.data);
  const [number, setNumber] = useState(props.route.params.data.number ? props.route.params.data.number : '');
  const [complement, setComplement] = useState(props.route.params.data.complement ? props.route.params.data.complement : '');


  async function handleChangeOrAddAddress() {
    if (!number) return Alert.alert('Aviso', 'Digite o número do seu endereço');

    setLoading(true);

    data.id = 1;
    data.number = number;

    if (complement) {
      data.complement = complement;
      setData(data);
    }

    const newAddresses = await changeOrAddAddress(data);

    setLoading(false);

    return navigation.navigate('Endereços', { newAddresses });
  }

  return (
    <View
      style={styles.container}
    >
      <Header />
      <View style={styles.addressContainer}>
        <View
          style={styles.addressBox}
        >
          <View style={styles.addressBoxName}>
            <Text style={styles.addressText}>
              {data.address}
            </Text>
          </View>
          <View style={{ ...styles.addressSeparator, marginTop: 15 }}>
            <TextInput
              placeholder="Número"
              value={number}
              style={styles.inputNumber}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="go"
              onChangeText={(e) => setNumber(e)}
            />
            <TextInput
              placeholder="Complemento"
              value={complement}
              style={styles.inputComplement}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="go"
              onChangeText={(e) => setComplement(e)}
            />
          </View>
          <TouchableOpacity
            style={styles.addressButton}
            onPress={() => handleChangeOrAddAddress()}
          >
            {loading ? (
              <ActivityIndicator size={25} color="#fff" />
            ) : (
              <Text style={styles.addressButtonText}>
                Salvar endereço
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
