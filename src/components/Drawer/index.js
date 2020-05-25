import React, { useContext } from 'react';
import {
  DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';
import styles from './styles';

export default function DrawerContent(props) {
  const { removeUser } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={styles.logOut}
        label="Sair"
        onPress={() => removeUser()}
      />
    </DrawerContentScrollView>
  );
}
