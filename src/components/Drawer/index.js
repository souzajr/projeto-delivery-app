import React, { useContext } from 'react';

import {
  DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Context } from '../../contexts/index';
import styles from './styles';

export default function DrawerContent(props) {
  const { removeUser } = useContext(Context);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={() => <Icon name="exit-to-app" size={18} color="#CB3F3F" />}
        onPress={() => removeUser()}
        labelStyle={styles.logOutButton}
        label="Sair"
      />
    </DrawerContentScrollView>
  );
}
