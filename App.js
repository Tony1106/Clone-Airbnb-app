/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



import {Tabs} from './config/router'
import {RootStack} from './config/RootStack'


type Props = {};

export default class App extends React.Component {
  render() {
    return <RootStack/>;



  }
};
