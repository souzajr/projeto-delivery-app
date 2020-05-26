import React, { useContext } from 'react';
import {
  Text, View,
} from 'react-native';

import { Context } from '../../contexts/index';

import Header from '../../components/Header/index';
import styles from './styles';

export default function Profile() {
  const { user } = useContext(Context);

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
