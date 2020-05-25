import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home/index';
import Profile from '../pages/Profile/index';

const Drawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#fff',
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: '#fff',
        activeBackgroundColor: '#CB3F3F',
        inactiveTintColor: '#777',
        itemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        name="Perfil"
        component={Profile}
      />
    </Drawer.Navigator>
  );
}

export default AppRoutes;
