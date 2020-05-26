import React, { useState, createContext, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { SplashScreen } from 'expo';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(false);

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
    setLoading(true);
    // chamar API
    // passar email, password
    // armazenar usuario em 'setUser(user)'

    const data = {
      email,
    };

    setUser(data);
    persistUser(data);
    setLoading(false);
  }

  async function registerLocal(email, password, confirmPassword) {
    setLoading(true);
    // chamar API
    // passar email, password, confirmPassword
    // armazenar usuario em 'setUser(user)'

    const data = {
      email,
    };

    setUser(data);
    persistUser(data);
    setLoading(false);
  }

  async function loginFacebook() {
    setLoading(true);

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
        setLoading(false);
        return {};
      }

      setLoading(false);
      return {};
    } catch ({ message }) {
      setLoading(false);
      return {};
    }
  }

  async function loginGoogle() {
    setLoading(true);

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
        setLoading(false);
        return {};
      }

      setLoading(false);
      return {};
    } catch (e) {
      setLoading(false);
      return {};
    }
  }

  function openOrCloseCart() {
    setCart(!!cart);
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
      cart,
      openOrCloseCart,
    }}
    >
      {children}
    </Context.Provider>
  );
}
