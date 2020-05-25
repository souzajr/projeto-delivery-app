import React from 'react';
import {
  Text, View, ScrollView, Image, TextInput, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/index';
import styles from './styles';

export default function Profile() {
  return (
    <View>
      <Header />
      <Text>Olá xd</Text>
    </View>
  );
}
