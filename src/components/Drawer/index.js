import React, { useContext } from 'react';
import {
  DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import { Context } from '../../contexts/index';
import styles from './styles';

export default function DrawerContent(props) {
  const { removeUser } = useContext(Context);

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
