import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity
  

} from 'react-native';
import {Button} from 'native-base'

import Icon from 'react-native-vector-icons/Ionicons';


const {height, width} = Dimensions.get('window')

export default class SearchBar extends Component {
constructor(props){
  super(props)
  this.state = {
    searchText: ''
  }
}
handleSearch() {
  this.props.onhandleSearch(this.state.searchText)
  
}

  render() {
    return (

        //  Search Bar
        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white',shadowOffset: {width: 1, height: 1}, borderColor: '#dddddd',  width: width-10, alignItems:'center', borderWidth: 1,}}>

           <TextInput onChangeText={(searchText)=> this.setState({searchText})} placeholder="Tìm kiếm" style={{flex: 10, paddingLeft: 10, height: 20}}/>
           <TouchableOpacity onPress={()=>this.handleSearch()} style={{flex: 2, alignItems:'center'}}> 
              <Icon name='ios-search' color='#934ddc' style={{fontSize: 20}}/>
            </TouchableOpacity> 
        </View>
    



    )
  }
}
