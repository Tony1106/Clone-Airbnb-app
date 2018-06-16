import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image

} from 'react-native';
import {createStackNavigator} from  'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons';

import RaoVat from '../Screen/RaoVat'
import Detail from '../Screen/Components/RaoVat/Detail'
import SearchBar from '../Screen/Components/RaoVat/SearchBar'


export const RaoVatStack = createStackNavigator({
  RaoVat: {
    screen: RaoVat,
    navigationOptions: {
       headerTitle: <SearchBar/>
    }
  },
  Detail: {
    screen: Detail
  }

});
