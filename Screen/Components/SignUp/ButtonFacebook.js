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
const {height, width} = Dimensions.get('window')
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import axios from 'axios'
class ButtonFacebook extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
    }
  }
  componentWillMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      console.log(persons);
      
    })
  }
  render () {
    
  return(
    <View style={{alignItems: 'center',marginTop: 30}}>
      <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","public_profile"]}
        // loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          var token = data.credentials.token;
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          const currentUser =  firebase.auth().signInAndRetrieveDataWithCredential(credential);
          
          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      />
    </View>
  )
  }
}

export default ButtonFacebook;
