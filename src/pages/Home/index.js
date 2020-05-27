import React from 'react';
import {
  View, Image, ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/index';
import ScrollHorizontalProduct from '../../components/ScrollHorizontalProduct/index';
import VerticalProducts from '../../components/VerticalProducts/index';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.banner}
            source={require('../../../assets/800x450.png')}
          />
        </View>
        <ScrollHorizontalProduct />
        <VerticalProducts />
      </ScrollView>
    </View>
  );
}
