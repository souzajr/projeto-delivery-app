import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/index';
import styles from './styles';

export default function Addresses() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState('');

  function handleSearch() {
    if (!searchText) return {};

    setLoading(true);

    // chamar API

    setLoading(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar cupom"
          onChangeText={(e) => setSearchText(e)}
        />
        <Icon
          onPress={handleSearch}
          style={styles.searchIcon}
          name="search"
          size={25}
          color="#777"
        />
      </View>
      <ScrollView style={styles.couponSection}>
        <View style={styles.couponContainer}>
          <Text style={styles.couponTitle}>
            <Icon
              style={styles.searchIcon}
              name="ticket"
              size={20}
              color="#CB3F3F"
            />
            {' '}
            CUPOM50 (R$50)
          </Text>
          <Text style={styles.couponDescription}>Válido para pedidos acima de R$25</Text>
          <Text style={styles.couponExpiration}>Validade: 27/05/2020</Text>
        </View>
        <View style={styles.couponContainer}>
          <Text style={styles.couponTitle}>
            <Icon
              style={styles.searchIcon}
              name="ticket"
              size={18}
              color="#CB3F3F"
            />
            {' '}
            CUPOM50 (R$50)
          </Text>
          <Text style={styles.couponDescription}>Válido para pedidos acima de R$25</Text>
          <Text style={styles.couponExpiration}>Validade: 27/05/2020</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
