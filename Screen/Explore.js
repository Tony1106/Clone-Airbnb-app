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
import Tag from './Components/Explore/Tag.js'
type Props = {};
export default class Explore extends Component {


  render() {
    return (
      <SafeAreaView style = {{flex: 1}}>
        <View style={{flex: 1}}>

          <View style= {{height:100, backgroundColor:'white', borderBottomWidth: 1, borderBottomColor: "#dddddd"}}>
            <View style={{
                flexDirection: 'row', padding: 10,
                backgroundColor: 'white',
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                marginHorizontal: 10,
                shadowOpacity: 0.2,
                elevation: 1
              }}>
              <Icon name = 'ios-search-outline' style={{fontSize: 24}}/>
              <TextInput placeholder= 'Find your place' placeholderTextColor = 'grey' style={{fontSize: 20, paddingLeft: 15, flex: 1, fontWeight: '700'}}>
              </TextInput>
            </View>
            <Animated.View
              style={{flexDirection: 'row',
              paddingHorizontal:20,
              position: 'relative',
              top: 10 }}>
              <Tag tagName={"Dates"}/>
              <Tag tagName={"Guests"}/>
              <Tag tagName={"Family"}/>
            </Animated.View>
          </View>   // Header

          <ScrollView scrollEventThrottle ={16}>
            <View style={{paddingTop: 20,backgroundColor: 'white'}}>
              <Text style = {{fontSize: 24, fontWeight: "700", paddingHorizontal: 20}}>
                What can I help you!
              </Text> //Text

              <View style={{paddingTop: 10}}> //Start Container Slider
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category img = {require('../Asset/image3.jpg')} text = {'Home'}/>
                  <Category img = {require('../Asset/image4.jpg')} text = {'Tony'}/>
                  <Category img = {require('../Asset/image5.jpg')} text = {'Tracy'}/>
                  <Category img = {require('../Asset/image2.jpg')} text = {'Tracy'}/>
                </ScrollView>
              </View> //Constainer slider

              <View style={{marginTop: 10, paddingHorizontal: 20}}> //Start main 2
                <Text style={{fontSize:24, fontWeight: "700"}}>
                  Introduce Airbnb Plus
                </Text>
                <Text style={{fontWeight: "500"}}>
                  A new section of home verify for quality & comfort
                </Text>
                <View style={{width: width -40, height: 200}}>
                  <Image source={require('../Asset/image4.jpg')}
                    style={{flex: 1, height: null, width: null,
                      resizeMode: 'cover',
                      borderRadius: 5,
                      marginTop: 20,
                      borderWidth: 1}}/>
                </View>
              </View> //end main 2
            </View>

            <View style={{marginTop: 40}}> //Home Around the world
              <Text style={{fontSize: 24, fontWeight: "700", paddingHorizontal: 20}}>
                Home Around the world
              </Text>

            <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              <Home homeImg ={require('../Asset/home1.jpg')}
                titleHomeText= {'ENTIRE CHALET'}
                boldHomeText = {'The Lake Tahoe Chalet'}
                desHomeText = {"USD125 per night - free cancellation"}
                rating={4}/>
              <Home homeImg ={require('../Asset/home2.jpg')}
                titleHomeText= {'ENTIRE CHALET'}
                boldHomeText = {'The Lake Tahoe Chalet'}
                desHomeText = {"USD125 per night - free cancellation"}
                rating={3}/>
              <Home homeImg ={require('../Asset/home3.jpg')}
                titleHomeText= {'ENTIRE CHALET'}
                boldHomeText = {'The Lake Tahoe Chalet'}
                desHomeText = {"USD125 per night - free cancellation"}
                rating={3}/>
              <Home homeImg ={require('../Asset/home4.jpg')}
                titleHomeText= {'ENTIRE CHALET'}
                boldHomeText = {'The Lake Tahoe Chalet'}
                desHomeText = {"USD125 per night - free cancellation"}
                rating={5}/>
            </View>//Home Around the world
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
