import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View
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

      <View style={{height: 30, borderRadius: 5, flexDirection: 'row', backgroundColor: 'white', alignItems: 'stretch', paddingRight: 10, justifyContent: 'center'}}>
        
        {/* handle location */}

         <Form style={{flex: 3, alignItems: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderRightColor: '#dddddd'}}>
            <Picker
              mode="dropdown"
              iosHeader="Chọn địa điểm"
              placeholder="Chọn địa điểm"
              placeholderStyle={{ color: 'black' }}

              style={{ width: undefined }}
              iosIcon={<Icon name="md-arrow-dropdown" />}
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
          </Form>

          {/* handle category */}
          <Form style={{flex: 3, alignItems: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderRightColor: '#dddddd'}}>
            <Picker
              mode="dropdown"
              iosHeader="Chọn danh mục"
              iosIcon={<Icon name="md-arrow-dropdown" />}
              style={{ width: undefined }}
              placeholder="Chọn danh mục"
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
          </Form>


          {/* handle filter */}
          <Form style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 5}}>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="md-arrow-dropdown" />}
              placeholderStyle={{ color: 'black' }}
              style={{ width: undefined }}
              placeholder="Lọc"
              selectedValue={this.state.filter}
              onValueChange={this.handleFilter.bind(this)}
            >

              <Picker.Item label="A-Z Gia thap - Gia Cao" value="key0" />
              <Picker.Item label="Z-A Gia Cao - Gia Thap" value="key1" />
              <Picker.Item label="A-Z Mới nhất" value="key2" />
              <Picker.Item label="Z-A Cũ nhất" value="key3" />
              
            </Picker>
          </Form>
      </View>

    );
  }
}

const styles = StyleSheet.create({

})
