import React from 'react'
import PropTypes from 'prop-types'
import {

  View,
  AsyncStorage,
  Text,
  Image,



} from 'react-native';

import {Button, Icon} from 'native-base'
import { withNavigation} from  'react-navigation';
import {isSignedIn} from '../Auth/Auth.js';
class DangBaiButton extends React.Component {
  constructor(){
    super();
    this.state={
      isAuth: false,
    }
  }
  componentDidMount(){

  }
  // handleCheckSignIn =() => {
  //   var user = firebase.auth().currentUser;
  //   if (user) {
  //     this.setState({
  //       isAuth: true
  //     })
  //   } else {

  //   }
  //     }
  
 
  DangBaiButton = async () => {
    const checkSignIn = await AsyncStorage.getItem("checkSignIn");
    
    this.props.navigation.navigate(checkSignIn? 'DangTin' :'SignIn')
  }
  render () {
    return (
      //Dang bai button
      
       <Button onPress={this.DangBaiButton}  style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around',backgroundColor: '#934ddc', borderRadius: 20, width: 130, height: 38, }}>
          <Icon name='ios-cloud-upload-outline' style= {{flex: 1, color: 'white'} }/>
          <Text style={{ flex: 3.5,color:'white', fontWeight: "600", padding: 0,margin:0, letterSpacing: 0,backgroundColor:'transparent'}} > 
            Đăng Bán
            </Text>
          </Button>
      
    )
  }
}

export default withNavigation(DangBaiButton);
