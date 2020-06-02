import React, { useState } from 'react';

import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  CheckBox,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header/index';
import styles from './styles';

export default function Product() {
  const [quantity, setQuantity] = useState(0);

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
            multiline
            numberOfLines={4}
            onChangeText={() => {}}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={{ ...styles.quantitySection, marginRight: 25 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              let i = quantity;
              if (i > 0) {
                i--;
                setQuantity(i--);
              }
            }}
          >
            <Icon
              name="minus"
              color="#CB3F3F"
              size={25}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.quantityText}>
            {quantity}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              let i = quantity;
              i++;
              setQuantity(i);
            }}
          >
            <Icon
              name="plus"
              color="#CB3F3F"
              size={25}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.addProductButton}
          >
            <Text style={styles.buttonText}>
              R$10,00
            </Text>
            <Text style={styles.buttonText}>
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
