import React from 'react';
import {
  Text, View, ScrollView, Image, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView>
          <View style={styles.fix}>
            <Text style={styles.upperText}>
              Digite seu Email abaixo, enviaremos um código de recuperação
            </Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.authButton}>
              <Text style={styles.textButton}>
                Recuperar
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
