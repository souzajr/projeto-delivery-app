import React from 'react';
import {
  Text, View, ScrollView, Image, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Register() {
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
            <Text style={styles.upperText}>Faça seu cadastro</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Senha"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Confirmar senha"
              style={styles.input}
              placeholderTextColor="#777"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TouchableOpacity style={{
              ...styles.authButton,
              ...styles.emailAuthButton,
            }}
            >
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
            </TouchableOpacity>
            <TouchableOpacity style={{
              ...styles.authButton,
              ...styles.facebookAuthButton,
            }}
            >
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
            </TouchableOpacity>
            <TouchableOpacity style={{
              ...styles.authButton,
              ...styles.googleAuthButton,
            }}
            >
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
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}