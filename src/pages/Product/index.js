import React, { useState } from 'react';

import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/index';
import styles from './styles';

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    if (quantity > 1) {
      let qnty = quantity;
      qnty--;

      setQuantity(qnty);
    }
  }

  function increaseQuantity() {
    let qnty = quantity;
    qnty++;

    setQuantity(qnty);
  }

  function handleSubmit() {
    setLoading(true);

    setLoading(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <Header />
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.productTitle}>Nome do produto</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.productDescription}>
            Descrição descrição descrição descrição
          </Text>
        </View>
        <View style={styles.hrContainer}><View style={styles.hr} /></View>
        <View style={styles.productOptionsContainer}>
          <View style={styles.productOptionsTitleContainer}>
            <Text style={styles.productOptionsTitle}>Nome da opção</Text>
          </View>
          <View style={styles.productOptionsInnerContainer}>
            <Text style={styles.productOption}>Opcional</Text>
            <Icon
              name="radio-button-unchecked"
              color="#CB3F3F"
              size={25}
            />
          </View>
        </View>
        <View style={styles.hrContainer}><View style={styles.hr} /></View>
        <View style={styles.productOptionsContainer}>
          <View style={styles.productOptionsTitleContainer}>
            <Text style={styles.productOptionsTitle}>Nome da opção</Text>
          </View>
          <View style={styles.productOptionsInnerContainer}>
            <Text style={styles.productOption}>Opcional</Text>
            <Icon
              name="radio-button-checked"
              color="#CB3F3F"
              size={25}
            />
          </View>
        </View>
        <View style={styles.hrContainer}><View style={styles.hr} /></View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Algum comentário?</Text>
        </View>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder="Ex: sem vinagrete."
            style={styles.input}
            placeholderTextColor="#777"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="go"
            onChangeText={() => {}}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={{ ...styles.quantitySection, marginRight: 25 }}>
          <TouchableWithoutFeedback
            onPress={() => decreaseQuantity()}
          >
            <Icon
              name="remove-circle-outline"
              color="#CB3F3F"
              size={25}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.quantityText}>
            {quantity}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => increaseQuantity()}
          >
            <Icon
              name="add-circle-outline"
              color="#CB3F3F"
              size={25}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity
            onPress={() => handleSubmit}
            style={loading
              ? { ...styles.addProductButton, ...styles.buttonConfigLoading }
              : { ...styles.addProductButton, ...styles.buttonConfig }}
          >
            {loading ? (
              <ActivityIndicator
                size={25}
                color="#fff"
              />
            ) : (
              <>
                <Text style={styles.buttonText}>
                  R$10,00
                </Text>
                <Text style={styles.buttonText}>
                  Adicionar
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
