import React from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAM22SUgsxPmyPx9G9wKbsABOY6u2CrWNo",
    authDomain: "australia-handbook.firebaseapp.com",
    databaseURL: "https://australia-handbook.firebaseio.com",
    projectId: "australia-handbook",
    storageBucket: "australia-handbook.appspot.com",
    messagingSenderId: "772324184653"
  };
  firebase.initializeApp(config);


import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Button, Form, Item, Label, Input } from 'native-base'
import ButtonFacebook from './Components/SignUp/ButtonFacebook'
import ButtonGoogle from './Components/SignUp/ButtonGoogle'
const {height, width} = Dimensions.get('window')
export default class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      id: '',
      password: '',
      userID: ''
    }
  }

SignUpUser = (id, password) => {
  console.log(id,password);
try{
  if(this.state.password.length<6) {
    alert('Vui long nhap mat khau lon hon 6 chu');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(id,password).then((user) => {
    firebase.database().ref('Users').push({
      UserID: user.user.uid,
      UserEmail: user.user.email,
      CreationTime: user.user.metadata.creationTime
    });
console.log(user);
  });

}
catch(error) {
  console.log(error.toString)
}
}
  render() {
    return (


      //DANG KY BANG EMAIL
      <Container style={{backgroundColor:'white', justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: "700"}}> Đăng Ky</Text>
        </View>

        <Form>
          <Item >
            <Label> Email: </Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText ={(id)=> this.setState({id})}
              />


          </Item>

          <Item >
            <Label> Password:</Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText ={(password)=> this.setState({password})}
              />


          </Item>
          <Button style={{marginTop: 10}}
            full
            rounded
            success
            onPress={()=> this.SignUpUser(this.state.id, this.state.password)}
            >
            <Text> Submit</Text>
          </Button>
            </Form>
        <View style={{alignItems: 'center'}}>
            //Login with facebook/gooogle

            //Button Facebook
            <ButtonFacebook style={{alignItems: 'center'}}/>
            //Button google
            <ButtonGoogle style={{alignItems: 'center'}}/>
            //By sign up you agree with our condition
            <View style={{}}> </View>

              <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => this.props.navigation.goBack()}> <Text> Dang Nhap</Text></Button>
              </View>
        </View>

      </Container>





    )



  }
};
