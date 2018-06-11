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
import {createBottomTabNavigator} from 'react-navigation'
import Explore from './Screen/Explore'
import Inbox from './Screen/Inbox'
import Saved from './Screen/Saved'
import Trips from './Screen/Trips'

import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => (
        <Icon name= 'ios-search-outline' color={tintColor} size={24}/>
      )

    }

  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => (
        <Icon name= 'ios-heart-outline' color={tintColor} size={24}/>
      )

    }
    },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => (
        <Image source={require('./Asset/Aibnb.png')} style={{height: 24, width: 24, tintColor: tintColor}}/>
      )

    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => (
        <Icon name= 'ios-mail-outline' color={tintColor} size={24}/>
      )

    }
  }
}, {
  tabBarOptions: {
    activeTintColor:'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 1,
    }
  }});
