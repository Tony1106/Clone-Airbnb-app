/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View

} from 'react-native';

import OptionLocation from './Components/RaoVat/OptionLocation'
import ListItemRaoVat from './Components/RaoVat/ListItemRaoVat'
import Detail from './Components/RaoVat/Detail'
import { Container, Header, Title, Item,Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base'

type Props = {};

export default  class RaoVat extends Component {
    constructor(props){
    super(props);
    this.state = {
      filterLocation: '',
      filterCategory: '',
      filter: ''
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
      <Container>


       <View style={{backgroundColor: '#dddddd', paddingTop: 10, paddingBottom: 10 }}>
        <OptionLocation onHandleFilterLocation={value => this.handleFilterLocation(value)} onHandleFilterCategory={value => this.handleFilterCategory(value)} onHandleFilter = {value => this.handleFilter(value)} />
        
       </View>
       <View> //Danh sach item
        <ListItemRaoVat navigation={this.props.navigation} filterCategory={this.state.filterCategory} filterLocation={this.state.filterLocation} filter= {this.state.filter}/>
       </View> //Danh sach item


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
