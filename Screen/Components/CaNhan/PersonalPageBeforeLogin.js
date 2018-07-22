

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation, NavigationActions, StackActions} from 'react-navigation';
import {Button, Header,Content, Container, ListItem, List, Switch, Thumbnail, Left, Right, Body} from 'native-base';
import * as firebase from 'firebase'

type Props = {};
export default class PersonalPageBeforeLogin extends Component {
constructor(props){
  super(props)
  this.state = {
    isAuth: false
  }
}


  render() {

    return (
      <Container>
      <Header/>
      //trang ca nhan
      <List style={{paddingTop: 20}}>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri:'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png' }} />
          </Left>
          <Body style={{borderBottomColor: 'white'}}>
            <Text>Đăng Ký/Đăng Nhập</Text>
          </Body>
          
        </ListItem>
      </List>

      //Option personal page
      <List>
            <ListItem icon>
              <Left>
                <Icon name="ios-star-outline" style={{fontSize: 20, color: 'red'}} />
              </Left>
              <Body>
                <Text>Tin đã đăng</Text>
              </Body>
            </ListItem>

            <ListItem icon >
              <Left>
                <Icon name="ios-settings-outline" style={{fontSize: 20, color: 'red'}}/>
              </Left>
              <Body>
                <Text>Thay đổi thông tin cá nhân</Text>
              </Body>
            </ListItem>
      </List>      

       <Content style={{paddingTop: 20}}>
       
          <Button onPress={() => this.props.navigation.navigate('SignIn')} block success style={{marginTop: 10}}>
            <Text style={{color: 'white'}}>Đăng Nhập</Text>
          </Button>
      </Content>
      
      </Container>
      
    );
  }
}


