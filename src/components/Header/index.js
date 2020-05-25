import React from 'react';
import {
  View, TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}
      >
        <Icon
          name="bars"
          size={30}
          color="#fff"
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
