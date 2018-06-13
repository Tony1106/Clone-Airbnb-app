import React from 'react'
import PropTypes from 'prop-types'
import {

  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window')
class BannerTop extends React.Component {
  render () {
    return(
      <View style={{height: 300, width: width, flex:1, paddingHorizontal: 20}}>
        <Image source={require('../../../Asset/image4.jpg')} style={{
            height: null,
            width: null,
            flex: 1,
            resizeMode: 'cover'
          }}/>
        <View>
          <Text style={{fontSize: 15, fontWeight:"700"}}>
            Úc cho ra đời visa 4 năm với mức lương $180,000/năm để thu hút nhân tài kỹ thuật công nghệ
          </Text>
          <Text style={{fontSize: 12, fontWeight:"500"}}>
            22/05/2018
          </Text>
          <Text style={{fontSize: 13, fontWeight:"500", paddingTop: 5}}>
            Chính phủ Turnbull cho ra đời một loại VISA mới nhằm thu hút nhân tài hầu cạnh tranh với các nước khác về tài năng công nghệ cao.Các công ty cũng sẽ được...
          </Text>
        </View>

      </View>
    )
  }
}

export default BannerTop;
