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
import Icon from 'react-native-vector-icons/Ionicons';
import {Button } from 'native-base'
const {height, width} = Dimensions.get('window')
class ButtonFacebook extends React.Component {
  render () {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 30}}>
      <View style={{flexDirection: 'row', width: width-50, height: 40, justifyContent: 'center', alignItems:'center'}}>
          <Button iconLeft success style={{flex: 3 }}>
            <Icon name='logo-facebook' style={{flex:1, fontSize: 35, paddingHorizontal: 20, paddingRight: 0}}/>
            <Text style={{paddingLeft: 0,fontSize: 20, textAlign: 'center', flex: 4}}> Dang Nhap Bang Facebook </Text></Button>
      </View>
    </View>
  )
  }
}

export default ButtonFacebook;
