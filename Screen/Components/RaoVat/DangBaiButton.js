import React from 'react'
import PropTypes from 'prop-types'
import {

  View,

  Button

} from 'react-native';
import { withNavigation} from  'react-navigation'
class DangBaiButton extends React.Component {
  constructor(){
    super();
    this.state={
      isAuth: true,
    }
  }
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
