import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from '../components/Drawer/index';
import Home from '../pages/Home/index';
import Orders from '../pages/Orders/index';
import Profile from '../pages/Profile/index';
import Coupons from '../pages/Coupons/index';
import Addresses from '../pages/Addresses/index';
import EditAddress from '../pages/EditAddress/index';
import Product from '../pages/Product/index';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoute() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
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
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="home"
              size={18}
              color={focused ? '#fff' : '#CB3F3F'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pedidos"
        component={Orders}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="receipt"
              size={18}
              color={focused ? '#fff' : '#CB3F3F'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="account-circle"
              size={18}
              color={focused ? '#fff' : '#CB3F3F'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cupons"
        component={Coupons}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="local-activity"
              size={18}
              color={focused ? '#fff' : '#CB3F3F'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Endereços"
        component={Addresses}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="map"
              size={18}
              color={focused ? '#fff' : '#CB3F3F'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        options={{ headerShown: false }}
        component={DrawerRoute}
      />
      <Stack.Screen
        name="Editar endereço"
        options={{ headerShown: false }}
        component={EditAddress}
      />
      <Stack.Screen
        name="Produto"
        options={{ headerShown: false }}
        component={Product}
      />
    </Stack.Navigator>
  );
}
