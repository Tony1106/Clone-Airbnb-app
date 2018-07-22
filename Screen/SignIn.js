import React from 'react'
import PropTypes from 'prop-types'

import * as firebase from 'firebase';



import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  AsyncStorage,
  TouchableOpacity

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Button, Form, Item, Label, Input } from 'native-base'

import ButtonFacebook from './Components/SignIn/ButtonFacebook'
import ButtonGoogle from './Components/SignIn/ButtonGoogle'
const {height, width} = Dimensions.get('window')
export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      id: '',
      password: '',
      isSignIn: false,
      userID: ''
    }
  }


  SignInUser = (id, password) => {

  try{
    firebase.auth().signInWithEmailAndPassword(id, password)

    .then((user)=>{
      const userID = user.user.uid;
      AsyncStorage.setItem("checkSignIn", "true");
      AsyncStorage.setItem("userID", userID);
      AsyncStorage.setItem("avatar", "https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-coder-3579ca3abc3fd60f-512x512.png");

      this.props.navigation.navigate('DangTin');


    }) ;
  }
  catch(error) {
    console.log(error.toString,'error')
  }}


  render() {
    return (
      //DANG NHAP BANG EMAIL
      <Container style={{backgroundColor:'white', justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: "700"}}> Đăng Nhap</Text>
        </View>

        <Form>
          <Item >
            <Label> Email:</Label>
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
            onPress={()=> this.SignInUser(this.state.id, this.state.password)}
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
                <Button onPress={() => this.props.navigation.navigate('SignUp')}> <Text> Dang Nhap</Text></Button>
              </View>
        </View>

      </Container>

    )



  }
};
