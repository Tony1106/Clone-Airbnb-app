/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  Animated,
  Dimensions
} from 'react-native';
const {width ,height} = Dimensions.get('window')
import Icon from  'react-native-vector-icons/Ionicons';
import Category from './Components/Explore/Category.js'
import Home from './Components/Explore/Home.js';
import Tag from './Components/Explore/Tag.js';
import BannerTop from './Components/TrangChu/BannerTop';
import ListView from './Components/TrangChu/ListView';
import TabBanner from './Components/TrangChu/TabBanner';


type Props = {};
export default class TrangChu extends Component {


  render() {
    return (
      <SafeAreaView style = {{flex: 1}}>
        <View style={{flex: 1}}>

          <View style= {{height:50,
              backgroundColor:'white',
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd",
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal:20,
              paddingTop: 10}}>
            <Icon name= 'ios-menu-outline'  size={24}/>
            <Text style={{fontSize: 30, fontWeight: "700"}}>
            Hello
            </Text>
            <Icon name= 'ios-person-add-outline'  size={24}/>
          </View>   // Logo

          <ScrollView scrollEventThrottle ={16}>

            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} style={{paddingTop: 20,backgroundColor: 'white', height: 350}}>
              <BannerTop/>
              <BannerTop/>
              <BannerTop/>

            </ScrollView> //BannerTop




            <View style={{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 24, fontWeight: "700", paddingHorizontal: 20}}>
                Các tiểu loại Visa
              </Text> //Text

              <View style={{paddingTop: 10}}> //Start Container Slider
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category img = {require('../Asset/image3.jpg')} text = {'Visa 189'}/>
                  <Category img = {require('../Asset/image4.jpg')} text = {'Visa 190'}/>
                  <Category img = {require('../Asset/image5.jpg')} text = {'Visa 489'}/>
                  <Category img = {require('../Asset/image2.jpg')} text = {'Visa 487'}/>
                  <Category img = {require('../Asset/image2.jpg')} text = {'Visa 485'}/>
                </ScrollView>
              </View> //Constainer slider


            </View>

            <View style={{marginTop: 10, paddingHorizontal: 20}}> //Viec lam moi
              <Text style={{fontSize:24, fontWeight: "700"}}>
                Việc làm mới
              </Text>
              <ListView image ={require('../Asset/image4.jpg')}
                title={'Tuyen Barista '} wages ={'22$'} description ={'Cafe o norcote dang tuyen...'} place={"Northcote/Melbourne"}/>
              <ListView image ={require('../Asset/image4.jpg')}
                title={'Tuyen Barista '} wages ={'22$'} description ={'Cafe o norcote dang tuyen...'} place={"Northcote/Melbourne"}/>
              <ListView image ={require('../Asset/image4.jpg')}
                title={'Tuyen Barista '} wages ={'22$'} description ={'Cafe o norcote dang tuyen...'} place={"Northcote/Melbourne"}/>
              <ListView image ={require('../Asset/image4.jpg')}
                title={'Tuyen Barista '} wages ={'22$'} description ={'Cafe o norcote dang tuyen...'} place={"Northcote/Melbourne"}/>
            </View>//Viec lam moi

            <View style={{marginTop: 10, paddingHorizontal: 20, }}> //Tab banner
              <TabBanner/>


            </View>

          </ScrollView> //MAIN PAGE
        </View>
      </SafeAreaView>

    );
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
