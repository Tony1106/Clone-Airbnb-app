import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image
} from 'react-native';


import { Form, Picker, Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window')


export default class OptionLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: undefined,
      category: undefined,
      filter: undefined,
    };
  }
  handleLocation(value: string) {
    this.setState({
      location: value
    });
    this.props.onHandleFilterLocation(value);
  }
  handleCategory(value: string) {
    this.setState({
      category: value
    });
    this.props.onHandleFilterCategory(value)
  }
  handleFilter(value: string) {
    this.setState({
      filter: value
    });
    this.props.onHandleFilter(value)
  }
  render() {
    return (

      <View style={{  flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
        
        {/* handle location */}
        <View style={{borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 5, backgroundColor: 'white',borderRadius: 5, shadowOffset:{width: 1, height: 1}, shadowColor: 'black'}}>
         <Form style={{flexDirection: 'row', alignItems: 'center', height: 30, width: width-20}}>
            <View style={{flex: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image source={require('../../../Asset/Icon/location2.png')}/> 

              <Picker
                mode="dropdown"
                iosHeader="Địa điểm"
                placeholder="Địa điểm"
                placeholderStyle={{ color: 'black' }}

                style={{ width: undefined, fontSize: 14, letterSpacing: 0, textAlign: 'left' }}

                selectedValue={this.state.location}
                onValueChange={this.handleLocation.bind(this)}
              >

                <Picker.Item label="NSW" value="key0" />
                <Picker.Item label="NT" value="key1" />
                <Picker.Item label="Queensland" value="key2" />
                <Picker.Item label="SA" value="key3" />
                <Picker.Item label="Tasmania" value="key4" />
                <Picker.Item label="Victoria" value="key5" />
                <Picker.Item label="WA" value="key6" />
              </Picker>
            </View>
            <Icon style={{flex:1, fontSize: 20}} name='ios-arrow-dropright-outline' />
          </Form>
          </View>

          {/* handle category */}
          <View style={{borderWidth: 0.5, borderColor: '#dddddd',marginBottom: 5, backgroundColor: 'white',borderRadius: 5}}> 
          <Form style={{flexDirection: 'row', height: 30,width: width-20,  alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flex: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image source={require('../../../Asset/Icon/location.png')}/> 
              <Picker
                mode="dropdown"
                iosHeader="Danh Mục"

                style={{ width: undefined,fontSize: 14, letterSpacing: 0, textAlign: 'left'  }}
                placeholder="Danh Mục"
                placeholderStyle={{ color: 'black' }}
                selectedValue={this.state.category}
                onValueChange={this.handleCategory.bind(this)}
              >

                <Picker.Item label="Đồ ăn Đồ uống" value="key0" />
                <Picker.Item label="Xe cộ" value="key1" />
                <Picker.Item label="Đồ điện tử" value="key2" />
                <Picker.Item label="Nội ngoại thất" value="key3" />
                <Picker.Item label="Thời Trang" value="key4" />
                <Picker.Item label="Mẹ và bé" value="key5" />
                <Picker.Item label="Thú cưng" value="key6" />
                <Picker.Item label="Việc làm" value="key7" />
                <Picker.Item label="Dịch Vụ" value="key8" />
              </Picker>
            </View>

            <Icon style={{flex: 1, fontSize: 20}} name='ios-arrow-dropright-outline' />
          </Form>
          </View>


          {/* handle filter */}
          <View style={{borderWidth: 0.5, borderColor: '#dddddd', marginBottom: 5, backgroundColor: 'white',borderRadius: 5}}>
          <Form style={{flexDirection: 'row',height: 30, width: width-20, alignItems: 'center', justifyContent: 'flex-start'}}>
            <View style={{flex: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image style={{paddingLeft:5}} source={require('../../../Asset/Icon/filter.png')}/> 
              <Picker
                mode="dropdown"
                iosHeader="Lọc"
                placeholderStyle={{ color: 'black' }}
                style={{ width: undefined, fontSize: 14, letterSpacing: 0, textAlign: 'left' }}
                placeholder="Lọc"
                selectedValue={this.state.filter}
                onValueChange={this.handleFilter.bind(this)}
              >

                <Picker.Item label="A-Z Gia thap - Gia Cao" value="key0" />
                <Picker.Item label="Z-A Gia Cao - Gia Thap" value="key1" />
                <Picker.Item label="A-Z Mới nhất" value="key2" />
                <Picker.Item label="Z-A Cũ nhất" value="key3" />
                
              </Picker>
            </View>
              <Icon style={{flex:1, fontSize:20}} name='ios-arrow-dropright-outline' />
            </Form>
            </View>
           
      </View>

    );
  }
}

const styles = StyleSheet.create({

})
