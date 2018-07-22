import React from 'react'
import PropTypes from 'prop-types'
import {View, Platform, ScrollView,CameraRoll,Image,Dimensions,TouchableHighlight} from 'react-native'
import { Container,Picker,  Header, Text, Item, Label, Input,Content,Textarea, Left, Body, Right, Button, Icon, Title,Form } from 'native-base';
import * as firebase from 'firebase';

import { withNavigation} from  'react-navigation'

//
//redux




//
//



class HeaderDangTin extends React.Component {
  constructor(props){
    super(props)
    this.state={
      photos: [],
      uriFirebase: []
    }

  }

  handleSubmit = () => {
    this.props.onHandleUpload(true);
  }
  render () {

console.log(this.state.uriFirebase);

    return(
      <Header>
        <Left>
          <Button transparent onPress={()=> this.props.navigation.navigate('RaoVat')}>
            <Text> Bo qua </Text>
          </Button>
        </Left>
        <Body>
          <Title>Tin Mới</Title>
        </Body>log
        <Right>
          <Button transparent onPress={this.handleSubmit}>
            <Text> Hoan Tat </Text>
          </Button>
        </Right>
      </Header>
    )
  }
}

export default withNavigation(HeaderDangTin);
