import React, { useContext } from 'react';
import {
  Text, View,
} from 'react-native';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header/index';
import styles from './styles';

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Header />
      <Text>
        Olá,
        {' '}
        {user.email}
      </Text>
    </View>
  );
}
