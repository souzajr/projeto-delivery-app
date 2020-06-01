import React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  CheckBox,
} from 'react-native';

import Header from '../../components/Header/index';
import styles from './styles';

export default function Product() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <Header />
      <ScrollView>
        <Text>Olá</Text>
        <View style={styles.hrContainer}><View style={styles.hr} /></View>
        <View style={{}}>
          <View>
            <Text>Escolha uma opção</Text>
            <Text>Obrigatório</Text>
          </View>
          <View>
            <Text>Opcional</Text>

            <CheckBox
              style={{ color: 'red' }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
