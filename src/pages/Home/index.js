import React from 'react';
import {
  View, Text,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/index';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Olá</Text>
    </View>
  );
}
