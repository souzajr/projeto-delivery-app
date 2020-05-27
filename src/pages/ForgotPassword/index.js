import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView, Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import styles from './styles';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function handleRecoveryPassword() {
    if (!email) return Alert.alert('Aviso', 'Digite seu Email');

    setLoading(true);

    // chamar API

    setEmail('');
    setLoading(false);
    return Alert.alert('Aviso', 'Email enviado');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
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
              value={email}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="go"
              keyboardType="email-address"
              onChangeText={(e) => setEmail(e)}
            />
            <TouchableOpacity
              onPress={handleRecoveryPassword}
              style={styles.authButton}
            >
              {loading ? (
                <ActivityIndicator style={styles.textButton} size={25} color="#fff" />
              ) : (
                <Text style={styles.textButton}>
                  Recuperar
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
