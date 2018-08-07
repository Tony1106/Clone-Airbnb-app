import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage

} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import * as firebase from 'firebase';


const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;
const {height, width} = Dimensions.get('window')
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import axios from 'axios'

class ButtonFacebook extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      avatarURL: '',
      userID:'',
      userEmail: '',
      userName: ''

    }
  }
  componentDidMount(){
 
  RNFetchBlob
  .config({
    // add this option that makes response data to be stored as a file,
    // this is much more performant.
    fileCache : true,
  })
  .fetch('GET', 'https://graph.facebook.com/v3.0/2188940964456675/picture?type=square', {
    //some headers ..
  })
  .then((res) => {
    // the temp file path
    var avatarURL = res.path();
    this.setState({avatarURL});

    
    console.log('The file saved to ', res.path())
  })
  }
 
  render () {
   var  _this = this
   console.log(this.state.avatarURL, "render");
   
  return(
    <View style={{alignItems: 'center',marginTop: 30}}>
      <Image source={{uri: this.state.avatarURL}}/> 
      <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","public_profile"]}
        // loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          var token = data.credentials.token;
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          const currentUser =  firebase.auth().signInAndRetrieveDataWithCredential(credential)
          .then((res)=> {
            const {photoURL, uid, email, displayName} = res.user;

            // push data to firebase
            // Check condition dulicate user sign up in Facebook

            var  checkDuplication =  firebase.database().ref('Users')
                      .orderByChild('UserID')
                      .equalTo(uid)
                      .once('value')
                      .then((value) => {
                        var res = value.val();
                        var uidFirebase = Object.values(res)[0].UserID;

                        console.log(uidFirebase, 'res');
                        console.log(uid, 'uid');
                        
                        
                        if(uidFirebase === uid) return 
                        else {
                          firebase.database().ref('Users').push({ 
                            UserID: uid,
                            UserEmail: email,
                            displayName,
                            avatarURL: photoURL,
                            // CreationTime: res.user.metadata.creationTime
                          })
                        }
                                 
                      })
            

              // Store data in AsyncStorage
              AsyncStorage.setItem("checkSignIn", "true");
              AsyncStorage.setItem("userID", uid);
              AsyncStorage.setItem("avatar", photoURL);

            _this.setState({
              avatarURL: photoURL,
              userID:uid,
              userEmail: email,
              userName: displayName});
          console.log('user',res.user);
          })
            
          console.log(currentUser, 'cu' );
          console.log(credential, 'credential' );
          
          
          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          firebase.auth().signOut();
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
