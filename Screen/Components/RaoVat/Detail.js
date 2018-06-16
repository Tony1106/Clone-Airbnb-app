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
import ImageDetail from './ImageDetail'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button } from 'native-base'
import ButtonContact from './Button'
const {height, width} = Dimensions.get('window')


export default class Detail extends Component {

  render() {
    return (

    <ScrollView stickyHeaderIndices={[0]}>
      <ButtonContact/>
      <View style={{height: 280, marginTop: 0}}>
        <ScrollView  horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 0}} style={{paddingTop: 20,paddingBottom: 0, backgroundColor: 'white', height: 350}}>
          <ImageDetail img={(require('../../../Asset/home1.jpg'))}/>
          <ImageDetail img={(require('../../../Asset/home1.jpg'))}/>
          <ImageDetail img={(require('../../../Asset/home1.jpg'))}/>
        </ScrollView>
      </View>// End Image product top
      <View style={{paddingHorizontal: 20, borderBottomWidth: 1, borderColor: '#dddddd', paddingBottom: 5, backgroundColor:'white'}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>
          Phong tro sinh vien chinh chu
        </Text> //Title
        <Text style={{fontSize: 20, fontWeight: '700', color: 'red'}}>
          50$
        </Text> //Gia
        <Text style={{fontSize: 10, fontWeight: '500'}}>
          14:04 | 11/06/2018
        </Text> //Timeline
      </View> //Header Text

      <View style={{paddingHorizontal: 20, paddingTop: 20, paddingBottom:10, borderBottomWidth: 1, borderColor: '#dddddd', backgroundColor: 'white'}}>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../../Asset/home1.jpg')} />
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
          Bán ốp iphone 5/5s có chân chống để ngang khi xem phim, hàng thanh lý Remax chất lượng, có 2 màu đen trắng
Giá 30k
Đc hẻm 378 XVNT p25, Bình Thạnh ( ae tới đầu hẻm call ra đón)
Call or sms trước khi tới, mình 34t
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
