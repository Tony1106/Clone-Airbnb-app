/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions

} from 'react-native';

import OptionLocation from './Components/RaoVat/OptionLocation'
import ListItemRaoVat from './Components/RaoVat/ListItemRaoVat'
import SearchBar from './Components/RaoVat/SearchBar'
import Detail from './Components/RaoVat/Detail'
import DangBaiButton from './Components/RaoVat/DangBaiButton'
import { Container, Header, Title, Item,Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base'
const {height, width} = Dimensions.get('window');

type Props = {};

export default  class RaoVat extends Component {
    constructor(props){
    super(props);
    this.state = {
      filterLocation: '',
      filterCategory: '',
      filter: '',
      searchText: ''
    };

}

handleFilterCategory(value){
this.setState({
  filterCategory: value
})

}
handleFilterLocation(value){
this.setState({
  filterLocation: value
})
}
handleFilter(value){
  this.setState({
    filter: value
  })
}

  render() {
    return (
      <Container style={{backgroundColor:'white'}}>
        <Header>
        <Body>
          <SearchBar onhandleSearch = {value => this.setState({searchText: value})} />
        </Body>
          
        </Header> 
       
       {/* <View style={{backgroundColor: '#dddddd', paddingTop: 10, paddingBottom: 10, alignItems:'center' , justifyContent:'center'}}>
        <OptionLocation onHandleFilterLocation={value => this.setState({filterLocation: value})} onHandleFilterCategory={value => this.handleFilterCategory(value)} onHandleFilter = {value => this.handleFilter(value)} />
        
       </View> */}
       <View style={{}}> //Danh sach item
        <ListItemRaoVat searchText={this.state.searchText} navigation={this.props.navigation} filterCategory={this.state.filterCategory} filterLocation={this.state.filterLocation} filter= {this.state.filter}/>
       </View> //Danh sach item
     
       <View style={{position: 'absolute', bottom: 20, left: width/2 -65}}> 
        <DangBaiButton/>
        </View> 
     </Container>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
