import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../components/Drawer/index';
import Home from '../pages/Home/index';
import Profile from '../pages/Profile/index';
import Coupons from '../pages/Coupons/index';
import Addresses from '../pages/Addresses/index';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
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
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        name="Perfil"
        component={Profile}
      />
      <Drawer.Screen
        name="Cupons"
        component={Coupons}
      />
      <Drawer.Screen
        name="Endereços"
        component={Addresses}
      />
    </Drawer.Navigator>
  );
}
