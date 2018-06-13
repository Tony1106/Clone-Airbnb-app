import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View
} from 'react-native';


import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window')


export default class OptionLocation extends Component {
  render() {
    return (

      <View style={{height: 30, width: width-30, borderRadius: 5, backgroundColor: 'white', marginHorizontal: 20, alignItems: 'stretch', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Icon name='ios-compass-outline' size= {20} style={{paddingHorizontal: 10}}/>
          <Text style={{paddingRight: width/2}}> Melbourne</Text>
          <Icon name='ios-arrow-dropright-outline' size= {20} style={{paddingRight: 10}}/>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

})
