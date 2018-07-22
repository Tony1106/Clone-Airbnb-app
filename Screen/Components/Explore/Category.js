import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image
} from 'react-native';


export default class Category extends Component {

  render(){
    const img = this.props.img;
    const text = this.props.text;

    return(
      <View style = {{height: 130, width: 130, borderWidth: 0.5, borderColor: '#dddddd', marginLeft: 20}}>
        <View style={{flex: 2}}>
          <Image source={img}
            style={{flex: 1, height: null, width: null, resizeMode: 'cover'}}/>
        </View> //image
        <View style ={{flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: "600", paddingLeft: 10, paddingTop:5}}>
            {text}
          </Text>
        </View> //Text
      </View>
    )
  }
}
