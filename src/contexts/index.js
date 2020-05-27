import React, { useState, createContext, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { SplashScreen } from 'expo';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState({
    email: false, facebook: false, google: false,
  });

  useEffect(() => {
    SplashScreen.preventAutoHide();

    async function loadUser() {
      const checkUser = await AsyncStorage.getItem('user');

      if (checkUser) setUser(JSON.parse(checkUser));

      SplashScreen.hide();
    }

    loadUser();
  }, []);

  async function persistUser(data) {
    await AsyncStorage.setItem('user', JSON.stringify(data));
  }

  async function removeUser() {
    await AsyncStorage.clear();
    setUser(null);
  }

  async function loginLocal(email, password) {
    setLoading({ email: true, facebook: false, google: false });
    // chamar API
    // passar email, password
    // armazenar usuario em 'setUser(user)'

    const data = {
      email,
    };

    setUser(data);
    persistUser(data);
    setLoading({ email: false, facebook: false, google: false });
  }

  async function registerLocal(email, password, confirmPassword) {
    setLoading({ email: true, facebook: false, google: false });
    // chamar API
    // passar email, password, confirmPassword
    // armazenar usuario em 'setUser(user)'

    const data = {
      email,
    };

    setUser(data);
    persistUser(data);
    setLoading({ email: false, facebook: false, google: false });
  }

  async function loginFacebook() {
    setLoading({ email: false, facebook: true, google: false });

    try {
      await Facebook.initializeAsync('<APP_ID>');

      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });

      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const data = await response.json();

        setUser({ data });
        persistUser({ data });
        setLoading({ email: false, facebook: false, google: false });
        return {};
      }

      setLoading({ email: false, facebook: false, google: false });
      return {};
    } catch ({ message }) {
      setLoading({ email: false, facebook: false, google: false });
      return {};
    }
  }

  async function loginGoogle() {
    setLoading({ email: false, facebook: false, google: true });

    try {
      const result = await Google.logInAsync({
        androidClientId: 'YOUR_CLIENT_ID_HERE',
        iosClientId: 'YOUR_CLIENT_ID_HERE',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        const data = {
          email: result.profile.email,
        };

        setUser(data);
        persistUser(data);
        setLoading({ email: false, facebook: false, google: false });
        return {};
      }

      setLoading({ email: false, facebook: false, google: false });
      return {};
    } catch (e) {
      setLoading({ email: false, facebook: false, google: false });
      return {};
    }
  }

  async function changeEmail(newEmail) {
    user.email = newEmail;

    await AsyncStorage.removeItem('user');
    await AsyncStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  return (
    <Context.Provider value={{
      signed: !!user,
      user,
      loginLocal,
      registerLocal,
      loginFacebook,
      loginGoogle,
      removeUser,
      loading,
      changeEmail,
    }}
    >
      {children}
    </Context.Provider>
  );
}
