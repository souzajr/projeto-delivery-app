import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import ForgotPassword from '../pages/ForgotPassword/index';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Register}
      />
      <Stack.Screen
        name="Recuperar senha"
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
}
