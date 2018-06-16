import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image

} from 'react-native';
import {createStackNavigator, SwitchNavigator} from  'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons';
import DangTin from '../Screen/Components/RaoVat/DangTin'
import RaoVat from '../Screen/RaoVat'
import SignIn from '../Screen/SignIn'
import {Tabs} from './router'
import {SignInSignUp} from './SignInSignUp'

export const RootStack = SwitchNavigator({
  Home: {
    screen: Tabs
  },
  SignInSignUp: {
    screen: SignInSignUp
  },
  DangTin: {
    screen: DangTin
  },
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
});
