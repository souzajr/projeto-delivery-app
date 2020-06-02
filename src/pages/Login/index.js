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
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context } from '../../contexts/index';

import styles from './styles';

export default function Login() {
  const inputPassword = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    loginLocal, loginFacebook, loginGoogle, loading,
  } = useContext(Context);

  const navigation = useNavigation();

  function handleLogin() {
    if (!email) return Alert.alert('Aviso', 'Digite seu Email');

    if (!password) return Alert.alert('Aviso', 'Digite sua senha');

    return loginLocal(email, password);
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
            <Text style={styles.upperText}>Acesse e peça sem sair de casa</Text>
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
              returnKeyType="go"
              ref={inputPassword}
              onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity
              style={loading.email ? {
                ...styles.authButtonLoading,
                ...styles.emailAuthButton,
              } : { ...styles.authButton, ...styles.emailAuthButton }}
              onPress={handleLogin}
            >
              {loading.email ? (
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
              style={loading.facebook ? {
                ...styles.authButtonLoading,
                ...styles.facebookAuthButton,
              } : { ...styles.authButton, ...styles.facebookAuthButton }}
              onPress={() => loginFacebook()}
            >
              {loading.facebook ? (
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
              style={loading.google ? {
                ...styles.authButtonLoading,
                ...styles.googleAuthButton,
              } : { ...styles.authButton, ...styles.googleAuthButton }}
              onPress={() => loginGoogle()}
            >
              {loading.google ? (
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Cadastro')}
              style={styles.buttonBottom}
            >
              <Text style={styles.textBottom}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Recuperar senha')}
              style={styles.buttonBottom}
            >
              <Text style={styles.textBottom}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
