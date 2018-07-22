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
import Communications from 'react-native-communications';

export default class ButtonContact extends Component {
constructor(props){
  super(props)
  
}
handleCall(){
  Communications.phonecall('0123456789', true)
}
handleText(){
  Communications.text('0123456789')
}
  render() {
    return (
      //BUTTON TOP
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
         <Button onPress={this.handleCall} style={{width: width/2, flex: 1, justifyContent: 'center'}} success><Text> Call </Text></Button>
         <Button onPress={this.handleText} style={{width: width/2, flex: 1, justifyContent: 'center'}}  warning><Text> Text </Text></Button>

      </View>
    )
  }
}
