import React, { Component } from 'react';
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
import { withNavigation } from 'react-navigation';
const {height, width} = Dimensions.get('window')


class ListItemRaoVat extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [{
        title: 'ban iphone gia ren o melbourne nhanh tay keo het',
        gia: '40$',
        location: 'Reservoir',
        key: '123',
        img: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        title: 'ban samsung gia ren',
        gia: '20$',
        location: 'Reservoir',
        key: '234',
        img: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        title: 'ban samsung gia ren',
        gia: '20$',
        location: 'Reservoir',
        key: '111',
        img: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        title: 'ban samsung gia ren',
        gia: '20$',
        location: 'Reservoir',
        key: '2324',
        img: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      }]
    }

  }
  renderItem = ({item}) => (
    <TouchableOpacity onPress={this.navigate}>
      <View  style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 20}}>
        <Image onPress={this.navigate} style={{height: width/5, width: width/5, backgroundColor:'grey'}} source={{uri: item.img}}/>
        <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'space-around', paddingHorizontal: 10}}>
          <Text style={{fontSize:13, textAlign: 'left'}}> {item.title}</Text>
          <Text style={{color: 'red', fontSize:15, fontWeight: "700"}}> {item.gia}</Text>
          <Text style={{fontSize:10}}> {item.location}</Text>
        </View>

      </View>
    </TouchableOpacity>

  )
  navigate = () => {this.props.navigation.navigate('Detail')};
  ItemSeparatorComponent = () => (
    <View style={{height: 1, backgroundColor: '#dddddd', marginTop: 10}}>

    </View>
  )

  render() {
    return (

      <FlatList
         data={this.state.data}
         renderItem={this.renderItem}
         keyExtraction = {(item, index) => item.key}
         ItemSeparatorComponent ={this.ItemSeparatorComponent}
       />

    );
  }
}

const styles = StyleSheet.create({

})
export default withNavigation(ListItemRaoVat);
