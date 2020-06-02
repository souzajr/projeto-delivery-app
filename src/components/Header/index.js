import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();

  function checkRoute() {
    return route.name === 'Editar endereço' || route.name === 'Produto';
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => (
            checkRoute()
              ? navigation.goBack()
              : navigation.toggleDrawer()
          )}
        >
          <Icon
            name={checkRoute() ? 'keyboard-arrow-left' : 'menu'}
            size={27}
            style={checkRoute() ? { marginTop: 4 } : ''}
            color="#fff"
          />
        </TouchableWithoutFeedback>
        <View style={styles.cart}>
          <Text style={styles.price}>R$10,00</Text>
          <TouchableWithoutFeedback
            onPress={() => {}}
          >
            <Icon
              name="shopping-cart"
              size={27}
              color="#fff"
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
}
