import React from 'react'

import {

  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,

} from 'react-native';
import StarRating from 'react-native-star-rating';
const {width ,height} = Dimensions.get('window')



class Home extends React.Component {
  render () {
return (

    <View style={{width: width/2 -30, height: width/2-30, marginTop: 10}}>
      <View style={{flex: 1}}>
        <Image source={this.props.homeImg} style={{height: null, width: null, flex: 1, resizeMode: 'cover'}}/>
      </View>
      <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
        <Text style={{fontSize: 12, fontWeight: "600"}}>
          {this.props.titleHomeText}
        </Text>
        <Text style={{fontSize: 14, fontWeight: "800", paddingTop: 10, paddingBottom: 5}}>
          {this.props.boldHomeText}
        </Text>
        <Text style={{fontSize: 12, fontWeight: "600"}}>
          {this.props.desHomeText}
        </Text>
        <StarRating
        disabled={true}
        maxStars={5}
        rating={this.props.rating}
        starSize={10}

        fullStarColor={'red'}/>
      </View>

    </View>

    )
  }
}

export default Home;
