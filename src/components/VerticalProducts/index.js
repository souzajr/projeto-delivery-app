import React from 'react';
import {
  View, Text, Image, TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

export default function VerticalProducts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria</Text>
      <TouchableWithoutFeedback>
        <View style={styles.productBox}>
          <View style={styles.innerProductBox}>
            <Text style={styles.productTitle}>
              Produto título
            </Text>
            <Text style={styles.productBoxDescription}>
              Descrição descrição descrição
            </Text>
            <View style={styles.priceArea}>
              <Text style={styles.boxPrice}>
                R$10,00
              </Text>
              <Text style={styles.boxPriceDiscount}>
                R$12,00
              </Text>
            </View>
          </View>
          <Image
            style={styles.productBoxImage}
            source={require('../../../assets/100x60.png')}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.productBox}>
          <View style={styles.innerProductBox}>
            <Text style={styles.productTitle}>
              Produto título
            </Text>
            <Text style={styles.productBoxDescription}>
              Descrição descrição descrição
            </Text>
            <View style={styles.priceArea}>
              <Text style={styles.boxPrice}>
                R$10,00
              </Text>
              <Text style={styles.boxPriceDiscount}>
                R$12,00
              </Text>
            </View>
          </View>
          <Image
            style={styles.productBoxImage}
            source={require('../../../assets/100x60.png')}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.productBox}>
          <View style={styles.innerProductBox}>
            <Text style={styles.productTitle}>
              Produto título
            </Text>
            <Text style={styles.productBoxDescription}>
              Descrição descrição descrição
            </Text>
            <View style={styles.priceArea}>
              <Text style={styles.boxPrice}>
                R$10,00
              </Text>
              <Text style={styles.boxPriceDiscount}>
                R$12,00
              </Text>
            </View>
          </View>
          <Image
            style={styles.productBoxImage}
            source={require('../../../assets/100x60.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
