import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity

} from 'react-native';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button } from 'native-base'
const {height, width} = Dimensions.get('window')
class ButtonGoogle extends React.Component {
  constructor(){
    super()
  }
  signInFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  render () {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
      <View style={{flexDirection: 'row', width: width-50, height: 40, justifyContent: 'center', alignItems:'center'}}>
          <Button onPress={()=> this.signInFacebook} iconLeft danger style={{flex: 3 }}>
            <Icon name='logo-google' style={{flex:1, fontSize: 35, paddingHorizontal: 20, paddingRight: 0}}/>
            <Text style={{paddingLeft: 0,fontSize: 20, textAlign: 'center', flex: 4}}> Dang Ky Bang Google </Text></Button>
      </View>
    </View>
  )
  }
}

export default ButtonGoogle;
