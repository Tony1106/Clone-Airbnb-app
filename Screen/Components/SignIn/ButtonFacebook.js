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
import * as firebase from 'firebase'
import Icon from 'react-native-vector-icons/Ionicons';
import {Button } from 'native-base'
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk'
const {height, width} = Dimensions.get('window')
class ButtonFacebook extends React.Component {
  handleFacebookLogin(){
    LoginManager.logInWithReadPermissions(["email"]).then((result)=> {
      if(result.isCancelled){
        console.log('login cancel');
        
      } else {
        AccessToken.getCurrentAccessToken().then((accessTokeData)=> {
          const credential = firebase.auth().FacebookAuthProvider.credential(accessTokeData.accessToken)
          firebase.auth().signInWithCredential(credential).then((result)=> {
            console.log('dang nhap thanh cong');
            
          }, error=> console.log(error)
          )
        }, error=> console.log(error))
      }
    }, (error)=> console.log(error))
    
  }
  render () {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 30}}>
      <View style={{flexDirection: 'row', width: width-50, height: 40, justifyContent: 'center', alignItems:'center'}}>
          <Button onPress={this.handleFacebookLogin} iconLeft success style={{flex: 3 }}>
            <Icon name='logo-facebook' style={{flex:1, fontSize: 35, paddingHorizontal: 20, paddingRight: 0}}/>
            <Text style={{paddingLeft: 0,fontSize: 20, textAlign: 'center', flex: 4}}> Dang Nhap Bang Facebook </Text></Button>
      </View>
    </View>
  )
  }
}

export default ButtonFacebook;
