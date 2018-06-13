import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class TabBanner extends Component {

  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <View style={{backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', height: width/2 -30, width: width/2 -30, paddingHorizontal:20, marginRight: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center', color: 'white'}}>
          Cam nang du hoc Uc
        </Text>
      </View>

      <View style={{backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', height: width/2 -30, width: width/2 -30, paddingHorizontal:20, marginRight: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: "700", textAlign: 'center', color: 'white'}}>
          Cam nang du hoc Uc
        </Text>
      </View>

      <View style={{backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', height: width/2 -30, width: width/2 -30, paddingHorizontal:20, marginRight: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: "700", textAlign: 'center', color: 'white'}}>
          Cam nang du hoc Uc
        </Text>
      </View>

      <View style={{backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center', height: width/2 -30, width: width/2 -30, paddingHorizontal:20, marginRight: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: "700", textAlign: 'center', color: 'white'}}>
          Cam nang du hoc Uc
        </Text>
      </View>
      </View>



    );
  }
}

const styles = StyleSheet.create({

})
