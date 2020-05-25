import React, { useState, useContext } from 'react';
import {
  Text, View, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../contexts/auth';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    loginLocal, loginFacebook, loginGoogle, loading,
  } = useContext(AuthContext);

  const navigation = useNavigation();

  function handleLogin() {
    if (!email) return alert('Digite seu Email');

    if (!password) return alert('Digite sua senha');

    return loginLocal(email, password);
  }

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
            <Text style={styles.upperText}>Acesse e peça sem sair de casa</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(e) => setEmail(e)}
            />
            <TextInput
              placeholder="Senha"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity
              style={loading ? {
                ...styles.authButtonLoading,
                ...styles.emailAuthButton,
              } : { ...styles.authButton, ...styles.emailAuthButton }}
              onPress={handleLogin}
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
    </View>
  );
}
