/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation, NavigationActions, StackActions} from 'react-navigation';
import {Button, Header,Content, Container, ListItem, List, Switch, Thumbnail, Left, Right, Body} from 'native-base';
import * as firebase from 'firebase'
type Props = {};
class PersonalPageAfterLogin extends Component {
constructor(props){
  super(props)
  this.state = {
    isAuth: false,
    avatar: ''
  }
}
componentDidMount(){
  AsyncStorage.getItem('avatar').then((res)=> this.setState({avatar: res}))
}
onSignOut = async () => {
  // var user = firebase.auth().currentUser;
  // if (user !== null) {userUID = user.uid};
  // AsyncStorage.removeItem(userUID);
 
  await firebase.auth().signOut()
  await AsyncStorage.removeItem('userID');
  await AsyncStorage.removeItem('checkSignIn');
  // this.props.navigation.navigate('RaoVat')
  
  this.props.navigation.navigate('PersonalPageBeforeLogin');
}


handleUserPosted(){
  this.props.navigation.navigate('UserItemPosted')
}

  render() {

    return (
      <Container>
      <Header/>
      //trang ca nhan
      <List style={{paddingTop: 20}}>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: this.state.avatar }} />
          </Left>
          <Body>
            <Text>So dien thoai</Text>
            <Text note>Trang Cá Nhân Của Bạn</Text>
          </Body>
          
        </ListItem>
      </List>

      //Option personal page
      <List>
            <ListItem icon onPress={() => this.props.navigation.navigate('UserItemPosted')}>
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
       
          <Button onPress={this.onSignOut} block danger style={{marginTop: 10}}>
            <Text style={{color: 'white'}}>Đăng Xuất</Text>
          </Button>
      </Content>
      
      </Container>
    );
  }
}


export default withNavigation(PersonalPageAfterLogin)