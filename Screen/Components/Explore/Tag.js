import React from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


class Tag extends React.Component {
  render () {
return (
  <View style={{}}>
    <Text style={{borderWidth: 1, borderRadius: 5, padding: 10, marginRight: 10,fontWeight:"700"}}>
      {this.props.tagName}
    </Text>
  </View>

    )
  }
}

export default Tag;
