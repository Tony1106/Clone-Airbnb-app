import React, { Component, CameraRoll  } from 'react';
import {View, ScrollView,Image,Dimensions,TouchableHighlight} from 'react-native'
import { Container,Picker,  Header, Text, Item, Label, Input,Content,Textarea, Left, Body, Right, Button, Icon, Title,Form } from 'native-base';
import PhotoUpload from '../DangTin/PhotoUpload'
const {height, width} = Dimensions.get('window')
export default class DangTin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      photos: []
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  handleUploadImage =()=> {
    CameraRoll.getPhotos({
      first:20,
      assetType: 'Photos',
    })
    .then(r=> {
      this.setState({photos: r.edges})
    })
    .catch((err) => console.log(err))
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Text> Bo qua </Text>
            </Button>
          </Left>
          <Body>
            <Title>Tin Mới</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text> Hoan Tat </Text>
            </Button>
          </Right>
        </Header>

        <ScrollView>
          //Photo


              <Button primary rounded onPress={this.handleUploadImage}>
                <Text> Upload hinh anh san pham</Text>
              </Button>
              {this.state.photos.map((p, i) => {
       return (
         <Image
           key={i}
           style={{
             width: 300,
             height: 100,
           }}
           source={{ uri: p.node.image.uri }}
         />
       );
     })}




          //Photo

          //Tilte
<Content>

  <Form  style={{flex: 1, paddingTop: 0}}>
    <Item stackedLabel>
      <Label>Nhập tên sản phẩm</Label>
      <Input />
    </Item>
  </Form>
</Content>


          //Tilte

          //Descrition
    <Content padder>
          <Form>
           <Textarea rowSpan={5} bordered placeholder="Nhập mô tả sản phẩm" />
         </Form>
       </Content>
          //Descrition

          //Gia
          <Form  style={{flex: 1, paddingTop: 0}}>
            <Item stackedLabel>
              <Label>Giá</Label>
              <Input />
            </Item>
          </Form>
          //Gia

          //Category
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Chọn danh mục"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
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
          //Category

          //Location
          <Form  style={{flex: 1, paddingTop: 0}}>
            <Item stackedLabel>
              <Label>Postcode</Label>
              <Input />
            </Item>
          </Form>



        </ScrollView>

      </Container>
    );
  }
}
