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
  View
} from 'react-native';
import PersonalPageAfterLogin from './Components/CaNhan/PersonalPageAfterLogin';
import PersonalPageBeforeLogin from './Components/CaNhan/PersonalPageBeforeLogin';
import {StackPersonalPageAfterLogin} from '../config/StackPersonalPageAfterLogin'
import {Button, Container, Header,Content} from 'native-base';
import {isSignedIn} from './Components/Auth/Auth'
type Props = {};
export default class CaNhan extends Component {
constructor(props){
  super(props)
  this.state = {
    isAuth: false
  }
}
componentDidMount(){
  isSignedIn()
  .then((res)=> this.setState({isAuth: res}))
}

  render() {
    var renderPersonalPage = this.state.isAuth?<StackPersonalPageAfterLogin/> : <PersonalPageBeforeLogin/>;
    return (
      <Container>
       
        {renderPersonalPage}
      </Container>
    );
  }
}

