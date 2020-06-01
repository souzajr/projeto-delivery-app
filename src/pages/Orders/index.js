import React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Context } from '../../contexts/index';

import Header from '../../components/Header/index';
import styles from './styles';

export default function Orders() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <Header />
      <ScrollView />
    </KeyboardAvoidingView>
  );
}
