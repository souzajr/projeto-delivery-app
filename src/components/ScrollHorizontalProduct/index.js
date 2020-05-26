import React from 'react';
import {
  View, Text, Image, TouchableWithoutFeedback, ScrollView,
} from 'react-native';
import styles from './styles';

export default function ScrollHorizontalProduct() {
  return (
    <View style={styles.featureContainer}>
      <Text style={styles.featureTitle}>Destaques</Text>
      <ScrollView horizontal>
        <TouchableWithoutFeedback>
          <View style={styles.featureProductBox}>
            <Image
              style={styles.featureBoxImage}
              source={require('../../../assets/250x150.png')}
            />
            <View style={styles.innerFeatureProductBox}>
              <Text style={styles.featureProductTitle}>
                Produto título
              </Text>
              <Text style={styles.featureProductBoxDescription}>
                Descrição descrição descrição
              </Text>
              <View style={styles.featurePriceArea}>
                <Text style={styles.featureBoxPrice}>
                  R$10,00
                </Text>
                <Text style={styles.featureBoxPriceDiscount}>
                  R$10,00
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.featureProductBox}>
            <Image
              style={styles.featureBoxImage}
              source={require('../../../assets/250x150.png')}
            />
            <View style={styles.innerFeatureProductBox}>
              <Text style={styles.featureProductTitle}>
                Produto título
              </Text>
              <Text style={styles.featureProductBoxDescription}>
                Descrição descrição descrição
              </Text>
              <View style={styles.featurePriceArea}>
                <Text style={styles.featureBoxPrice}>
                  R$10,00
                </Text>
                <Text style={styles.featureBoxPriceDiscount}>
                  R$10,00
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.featureProductBox}>
            <Image
              style={styles.featureBoxImage}
              source={require('../../../assets/250x150.png')}
            />
            <View style={styles.innerFeatureProductBox}>
              <Text style={styles.featureProductTitle}>
                Produto título
              </Text>
              <Text style={styles.featureProductBoxDescription}>
                Descrição descrição descrição
              </Text>
              <View style={styles.featurePriceArea}>
                <Text style={styles.featureBoxPrice}>
                  R$10,00
                </Text>
                <Text style={styles.featureBoxPriceDiscount}>
                  R$10,00
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}
