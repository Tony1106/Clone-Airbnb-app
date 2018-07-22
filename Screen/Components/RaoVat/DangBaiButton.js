import React from 'react'
import PropTypes from 'prop-types'
import {

  View,
  AsyncStorage,
  Button

} from 'react-native';
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
    isSignedIn()
    .then((res)=> this.setState({isAuth: res}))
    

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
  DangBaiButton = () => {
    this.props.navigation.navigate(this.state.isAuth? 'DangTin' :'SignIn')
  }
  render () {
    return (
      //Dang bai button
      <View style={{flex: 1, backgroundColor: 'green', borderWidth: 1, borderColor: '#dddddd', borderRadius: 10}}>
        <Button title='Đăng Tin' onPress={this.DangBaiButton} color="white" style={{ }}/>
      </View>
    )
  }
}

export default withNavigation(DangBaiButton);
