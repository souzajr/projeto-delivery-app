import React, { useState, useContext, useRef } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Context } from '../../contexts/index';
import styles from './styles';

export default function Register() {
  const inputPassword = useRef(null);
  const inputConfirmPassword = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    registerLocal, loginFacebook, loginGoogle, loading,
  } = useContext(Context);

  function handleRegister() {
    if (!email) return alert('Digite seu Email');
    if (!password) return alert('Digite sua senha');
    if (!confirmPassword) return alert('Digite a confirmação da senha');
    if (password !== confirmPassword) return alert('A senha e a confirmação de senha precisam ser iguais');

    return registerLocal(email, password, confirmPassword);
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
            <Text style={styles.upperText}>Faça seu cadastro</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => inputPassword.current.focus()}
              keyboardType="email-address"
              onChangeText={(e) => setEmail(e)}
            />
            <TextInput
              placeholder="Senha"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              returnKeyType="next"
              onSubmitEditing={() => inputConfirmPassword.current.focus()}
              ref={inputPassword}
              onChangeText={(e) => setPassword(e)}
            />
            <TextInput
              placeholder="Confirmar senha"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              ref={inputConfirmPassword}
              returnKeyType="go"
              onChangeText={(e) => setConfirmPassword(e)}
            />
            <TouchableOpacity
              style={loading ? {
                ...styles.authButtonLoading,
                ...styles.emailAuthButton,
              } : { ...styles.authButton, ...styles.emailAuthButton }}
              onPress={handleRegister}
            >
              {loading ? (
                <ActivityIndicator size={25} color="#fff" />
              ) : (
                <>
                  <View style={styles.viewIcon}>
                    <Icon
                      name="envelope"
                      size={25}
                      color="#fff"
                      style={styles.iconButton}
                    />
                  </View>
                  <View style={styles.viewTextButton}>
                    <Text style={{ ...styles.textButton, color: '#fff' }}>
                      Entrar com Email
                    </Text>
                  </View>
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={loading ? {
                ...styles.authButtonLoading,
                ...styles.facebookAuthButton,
              } : { ...styles.authButton, ...styles.facebookAuthButton }}
              onPress={() => loginFacebook()}
            >
              {loading ? (
                <ActivityIndicator size={25} color="#fff" />
              ) : (
                <>
                  <View style={styles.viewIcon}>
                    <Icon
                      name="facebook-square"
                      size={25}
                      color="#fff"
                      style={styles.iconButton}
                    />
                  </View>
                  <View style={styles.viewTextButton}>
                    <Text style={{ ...styles.textButton, color: '#fff' }}>
                      Entrar com Facebook
                    </Text>
                  </View>
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={loading ? {
                ...styles.authButtonLoading,
                ...styles.googleAuthButton,
              } : { ...styles.authButton, ...styles.googleAuthButton }}
              onPress={() => loginGoogle()}
            >
              {loading ? (
                <ActivityIndicator size={25} color="#777" />
              ) : (
                <>
                  <View style={styles.viewIcon}>
                    <Image
                      style={styles.iconGoogleButton}
                      source={require('../../../assets/google.png')}
                    />
                  </View>
                  <View style={styles.viewTextButton}>
                    <Text style={{ ...styles.textButton, color: '#777' }}>
                      Entrar com Google
                    </Text>
                  </View>
                </>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
