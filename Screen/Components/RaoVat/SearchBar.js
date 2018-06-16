import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  Button

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DangBaiButton from './DangBaiButton'

const {height, width} = Dimensions.get('window')

export default class SearchBar extends Component {

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingHorizontal: 20}}>
        //  Search Bar
        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white',shadowOffset: {width: 1, height: 1}, borderColor: '#dddddd',  width: 50, justifyContent: 'flex-start', alignItems:'center', height: 30, borderWidth: 1,}}>

           <TextInput placeholder="Search" style={{flex: 5 }}/>
           <Icon name='ios-search' style={{flex: 1,fontSize: 24}}/>

        </View>
        //Nut dang bai
        <DangBaiButton/>

      </View>

    )
  }
}
