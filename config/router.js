import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image

} from 'react-native';
import {createStackNavigator, StackNavigator, createBottomTabNavigator} from  'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons';
import TrangChu from '../Screen/TrangChu'
import DiTru from '../Screen/DiTru'
import ViecLam from '../Screen/ViecLam'
import CaNhan from '../Screen/CaNhan'
import {RaoVatStack} from './RaoVatStack'
import {PersonalStack} from './PersonalStack.js'
export const Tabs = createBottomTabNavigator({
  TrangChu: {
    screen: TrangChu,
    navigationOptions: {
      tabBarLabel: 'Trang Chủ',
      tabBarIcon: ({tintColor}) => (
        <Icon name= 'ios-search-outline' color={tintColor} size={24}/>
      )

    }

  },
  DiTru: {
    screen: DiTru,
    navigationOptions: {
      tabBarLabel: 'Di Trú',
      tabBarIcon: ({tintColor}) => (
        <Icon name= 'ios-mail-outline' color={tintColor} size={24}/>
      )

    }
  },
  ViecLam: {
    screen: ViecLam,
    navigationOptions: {
      tabBarLabel: 'Việc  Làm',
      tabBarIcon: ({tintColor}) => (
        <Icon name= 'ios-heart-outline' color={tintColor} size={24}/>
      ),


    }
    },
  RaoVat: {
    screen: RaoVatStack,
    navigationOptions: {
      tabBarLabel: 'Rao Vặt',
      tabBarIcon: ({tintColor}) => (
        <Icon name= 'ios-heart-outline' color={tintColor} size={24}/>
      )

    }
    },
  CaNhan: {
    screen: PersonalStack,
    navigationOptions: {
      tabBarLabel: 'Cá Nhân',
      tabBarIcon: ({tintColor}) => (
        <Image source={require('../Asset/Aibnb.png')} style={{height: 24, width: 24, tintColor: tintColor}}/>
      )

    }
  },

}, {
  tabBarOptions: {
    activeTintColor:'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 1,
    }
  }
});
