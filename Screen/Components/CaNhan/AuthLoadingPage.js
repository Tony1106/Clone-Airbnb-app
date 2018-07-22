import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Container, Header, Content,Spinner} from 'native-base'
import {isSignedIn} from '../Auth/Auth'
export default class AuthLoadingPage extends React.Component {
  constructor(props) {
    super(props);
    
  }
componentDidMount(){
    this._bootstrapAsync();
}
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
   const checkSignIn = await AsyncStorage.getItem("checkSignIn");
   console.log(checkSignIn, 'check sign in');
   
    this.props.navigation.navigate(checkSignIn ? 'PersonalPageAfterLogin' : 'PersonalPageBeforeLogin');

    
  };

  // Render any loading content that you like here
  render() {
    return (
        <Container>
        <Header />
        <Content>
          <Spinner />
          <Spinner color='red' />
        </Content>
      </Container>
    );
  }
}