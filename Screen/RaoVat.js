/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View

} from 'react-native';

import OptionLocation from './Components/RaoVat/OptionLocation'
import ListItemRaoVat from './Components/RaoVat/ListItem'
import Detail from './Components/RaoVat/Detail'
import { Container, Header, Title, Item,Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base'
type Props = {};

export default  class RaoVat extends Component {

  render() {
    return (
      <Container>
      

       <View style={{backgroundColor: '#dddddd', paddingTop: 10, paddingBottom: 10}}>
        <OptionLocation />
       </View>
       <View> //Danh sach item
        <ListItemRaoVat navigation={this.props.navigation}/>
       </View> //Danh sach item


     </Container>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
