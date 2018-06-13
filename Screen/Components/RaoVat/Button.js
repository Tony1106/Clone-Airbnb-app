import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ImageDetail from './ImageDetail'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button } from 'native-base'
const {height, width} = Dimensions.get('window')


export default class ButtonContact extends Component {

  render() {
    return (
      //BUTTON TOP
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
         <Button style={{width: width/2, flex: 1, justifyContent: 'center'}} success><Text> CALL </Text></Button>
         <Button style={{width: width/2, flex: 1, justifyContent: 'center'}}  warning><Text> Text </Text></Button>

      </View>
    )
  }
}
