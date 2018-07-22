import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,

  Image,
  FlatList,

  ListView,
  ScrollView

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ImageDetail from './ImageDetail';
import {locationFilterData} from '../../../Asset/Data/dataSource'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button } from 'native-base'
import ButtonContact from './Button';
import * as firebase from 'firebase';

const {height, width} = Dimensions.get('window')


export default class Detail extends Component {
  constructor(){
    super()
    this.state={
      title : '',
      price : '',
      description: '',
      location :'',
      category :'',
      itemID: '',
      imageURL: [],
      numberOfPhoto: null,
      item:[]
    }
  }
  componentDidMount(){

    //Get params itemID from ListItemRaoVat
    const itemID = this.props.navigation.getParam('itemID', 'no-ID');
    const photos = this.props.navigation.getParam('photos', []);

    var ref = firebase.database().ref().child('Items/' +itemID);
    ref.once('value', snap => {
      const item =  snap.val();
      var { title, price, description, location, category, itemID, numberOfPhoto} = item;
      this.setState({
        title, price, description, location, category, itemID, item,numberOfPhoto
      })

      
    })
    .then(()=> {
      var item=this.state.item;
      console.log(photos, 'get param photo');
      
      var imageObject = item.imageURL;

      
        var imageURL = [];
        // imageURL = Object.values(imageObject);
        if (imageObject) {
          imageURL = Object.values(imageObject);
        } else { 
        
          imageURL = photos;
        }
    
      
      
      console.log(imageURL, 'imageurl');
      
      this.setState({imageURL})

    })

  }

  render() {
    var { title, price, description, location, category, itemID, imageURL} = this.state;

    //avatar user
    var imageDetail = imageURL.map((image, index)=> {
        return <ImageDetail img={image} key={index}/>
    })

console.log(locationFilterData.key0, 'test location filer');

    return (

    <ScrollView stickyHeaderIndices={[0]}>
      <ButtonContact/>
      <View style={{height: 280, marginTop: 0}}>
        <ScrollView  horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 0}} style={{paddingTop: 20,paddingBottom: 0, backgroundColor: 'white', height: 350}}>
          {imageDetail} //avatar user

        </ScrollView>
      </View>// End Image product top
      <View style={{paddingHorizontal: 20, borderBottomWidth: 1, borderColor: '#dddddd', paddingBottom: 5, backgroundColor:'white'}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>
          {title}
        </Text> //Title
        <Text style={{fontSize: 20, fontWeight: '700', color: 'red'}}>
          {price}
        </Text> //Gia
        <Text style={{fontSize: 10, fontWeight: '500'}}>
          14:04 | 11/06/2018
        </Text> //Timeline
      </View> //Header Text

      <View style={{paddingHorizontal: 20, paddingTop: 20, paddingBottom:10, borderBottomWidth: 1, borderColor: '#dddddd', backgroundColor: 'white'}}>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{uri: this.state.imageURL[0]}} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text> //user name
              <Text note>Reservoir</Text> //user location

            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </View> //Avatar

      //DESCRIPTION

      <View style={{paddingHorizontal: 20, paddingTop: 20, paddingBottom:10, borderBottomWidth: 1, borderColor: '#dddddd', backgroundColor: 'white'}}>
        <Text>
          {description}
        </Text>
      </View> //Description

      <View style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom:10, borderBottomWidth: 1, borderColor: '#dddddd', backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>
            Loai:
          </Text>
          <Text style={{}}>
            Cho Thue
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>
            Vung:
          </Text>
          <Text style={{}}>
            Reservoir | Victoria
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>
            Danh Muc:
          </Text>
          <Text style={{}}>
            Iphone
          </Text>
        </View>

      </View> //Category

    </ScrollView>





    );
  }
}

const styles = StyleSheet.create({

})
