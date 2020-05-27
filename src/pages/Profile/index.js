import React, { useState, useContext, useRef } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { Context } from '../../contexts/index';

import Header from '../../components/Header/index';
import styles from './styles';

export default function Profile() {
  const inputNewPassword = useRef(null);
  const inputConfirmNewPassword = useRef(null);

  const { user, changeEmail } = useContext(Context);

  const [loading, setLoading] = useState({ email: false, password: false });
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  function handleChangeEmail() {
    if (!email) return Alert.alert('Aviso', 'Digite seu email');

    if (email === user.email) return {};

    setLoading({ email: true, password: false });

    // chamar API

    changeEmail(email);
    setLoading({ email: false, password: false });
    return Alert.alert('Aviso', 'Email alterado com sucesso');
  }

  function handleChangePassword() {
    if (!password) return Alert.alert('Aviso', 'Digite sua senha atual');

    if (!newPassword) return Alert.alert('Aviso', 'Digite sua nova senha');

    if (password === newPassword) return Alert.alert('Aviso', 'Sua nova senha não pode ser igual a sua senha atual');

    if (!confirmNewPassword) return Alert.alert('Aviso', 'Digite a confirmação da sua nova senha');

    if (newPassword !== confirmNewPassword) return Alert.alert('Aviso', 'A nova senha e a confirmação na nova senhap precisam ser iguais');

    setLoading({ email: false, password: true });

    // chamar API

    setPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setLoading({ email: false, password: false });
    return Alert.alert('Aviso', 'Senha alterada com sucesso');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <Header />
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Altere suas informações</Text>
        </View>
        <View style={styles.hrContainer}><View style={styles.hr} /></View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Alterar Email</Text>
        </View>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            style={styles.input}
            placeholderTextColor="#777"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="go"
            keyboardType="email-address"
            onChangeText={(e) => setEmail(e)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleChangeEmail}
          >
            {loading.email ? (
              <ActivityIndicator size={25} color="#fff" />
            ) : (
              <Text style={{ ...styles.textButton, color: '#fff' }}>
                Alterar
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.hrContainer}><View style={styles.hr} /></View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Alterar senha</Text>
        </View>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder="Senha atual"
            style={styles.input}
            placeholderTextColor="#777"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            returnKeyType="next"
            value={password}
            onSubmitEditing={() => inputNewPassword.current.focus()}
            onChangeText={(e) => setPassword(e)}
          />
          <TextInput
            placeholder="Nova senha"
            style={styles.input}
            placeholderTextColor="#777"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            returnKeyType="next"
            value={newPassword}
            ref={inputNewPassword}
            onSubmitEditing={() => inputConfirmNewPassword.current.focus()}
            onChangeText={(e) => setNewPassword(e)}
          />
          <TextInput
            placeholder="Confirmar nova senha"
            style={styles.input}
            placeholderTextColor="#777"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            returnKeyType="go"
            value={confirmNewPassword}
            ref={inputConfirmNewPassword}
            onChangeText={(e) => setConfirmNewPassword(e)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleChangePassword}
          >
            {loading.password ? (
              <ActivityIndicator size={25} color="#fff" />
            ) : (
              <Text style={{ ...styles.textButton, color: '#fff' }}>
                Alterar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
