import React, { useState, createContext, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { SplashScreen } from 'expo';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'roberto',
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
    // chamar API
    // passar email, password, confirmPassword
    // armazenar usuario em 'setUser(user)'

    setUser(true);
    persistUser({});
  }

  async function registerLocal(email, password, confirmPassword) {
    // chamar API
    // passar email, password, confirmPassword
    // armazenar usuario em 'setUser(user)'

    setUser(true);
    persistUser({});
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user, user, loginLocal, registerLocal, removeUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
