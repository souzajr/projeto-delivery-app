import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon
            name="bars"
            size={30}
            color="#fff"
          />
        </TouchableWithoutFeedback>
        <View style={styles.cart}>
          <Text style={styles.price}>R$10,00</Text>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(true)}
          >
            <Icon
              name="shopping-cart"
              size={30}
              color="#fff"
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        presentationStyle="overFullScreen"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableWithoutFeedback
              style={styles.openButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </>
  );
}
