import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ContextProvider from './src/contexts/index';

import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <StatusBar backgroundColor="#CB3F3F" barStyle="light-content" />
        <Routes />
      </ContextProvider>
    </NavigationContainer>
  );
}
