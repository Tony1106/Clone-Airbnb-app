import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image

} from 'react-native';
import {createStackNavigator} from  'react-navigation'

import SignIn from '../Screen/SignIn'
import SignUp from '../Screen/SignUp'




export const SignInSignUp = createStackNavigator({
  SignIn: {
    screen: SignIn,

  },
  SignUp: {
    screen: SignUp
  }

});
