import React, { useContext } from 'react';

import { TouchableWithoutFeedback } from 'react-native';

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
      <TouchableWithoutFeedback
        style={styles.logOutContainer}
        onPress={() => removeUser()}
      >
        <Icon name="menu" size={18} color="#CB3F3F" />
        <DrawerItem
          labelStyle={{ ...styles.logOut, marginLeft: 13 }}
          label="Sair"
        />
      </TouchableWithoutFeedback>
    </DrawerContentScrollView>
  );
}
