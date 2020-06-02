import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/index';
import styles from './styles';

export default function Coupons() {
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
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Pesquisar cupom"
            style={styles.input}
            placeholderTextColor="#777"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="go"
            onChangeText={(e) => setSearchText(e)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSearch}
          >
            {loading ? (
              <ActivityIndicator size={25} color="#fff" />
            ) : (
              <Text style={styles.textButton}>
                Buscar
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.hrContainer}><View style={styles.hr} /></View>
        <View style={styles.couponContainer}>
          <Text style={styles.noCouponText}>
            Você Ainda não adicionou nenhum cupom
          </Text>
          <View style={styles.couponBox}>
            <Text style={styles.couponTitle}>
              <Icon
                style={styles.searchIcon}
                name="local-offer"
                size={15}
                color="#CB3F3F"
              />
              {' '}
              CUPOM50 (R$50)
            </Text>
            <Text style={styles.couponDescription}>Válido para pedidos acima de R$25</Text>
            <Text style={styles.couponExpiration}>Validade: 27/05/2020</Text>
          </View>
          <View style={styles.couponBox}>
            <Text style={styles.couponTitle}>
              <Icon
                style={styles.searchIcon}
                name="local-offer"
                size={15}
                color="#CB3F3F"
              />
              {' '}
              CUPOM50 (R$50)
            </Text>
            <Text style={styles.couponDescription}>Válido para pedidos acima de R$25</Text>
            <Text style={styles.couponExpiration}>Validade: 27/05/2020</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
