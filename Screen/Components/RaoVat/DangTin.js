import React, { Component  } from 'react';
import {View, Platform, ImageBackground, TouchableOpacity, ScrollView,Image,Dimensions, AsyncStorage} from 'react-native'
import { Container,Picker,  Header, Text, Item, Label, Input,Content,Textarea, Left, Body, Right, Button, Icon, Title,Form } from 'native-base';
import { withNavigation} from 'react-navigation';
import PhotoUpload from '../DangTin/PhotoUpload';
import HeaderDangTin from '../DangTin/HeaderDangTin';

import * as firebase from 'firebase';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';

//
// Blob
//
import RNFetchBlob from 'react-native-fetch-blob'
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;


//



const {height, width} = Dimensions.get('window')
class DangTin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      photos: [],
      thumbnailURL: '',
      numberOfPhoto: 0,
      itemID: '',
      title: '',
      description: '',
      price: '',
      userID:'',
      category:'',
      locationPostcode: '',
      locationSuburb: '',
      locationState: '',
      timeUpload:''


    };
  }
  componentDidMount(){
    AsyncStorage.getItem('userID').then((res)=>this.setState({userID: res}))
    
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
      category: value
    });
  }

  handleSelectImage =()=> {
    var ImagePicker = require('react-native-image-picker');
    var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
ImagePicker.launchImageLibrary(options, (response) => {
console.log('Response = ', response);

if (response.didCancel) {
console.log('User cancelled image picker');
}
else if (response.error) {
console.log('ImagePicker Error: ', response.error);
}
else if (response.customButton) {
console.log('User tapped custom button: ', response.customButton);
}
else {
let source = { uri: response.uri };

// You can also display the image using data:
// let source = { uri: 'data:image/jpeg;base64,' + response.data };
newSource =[...this.state.photos,source];
const length = newSource.length;
this.setState({
  photos: newSource,
  numberOfPhoto: length,
  imageURL: []


});

}
});
}
removeImageUpload(i) {
  photos = this.state.photos;
  photos.splice(i,1);
  this.setState({photos})
}

//Upload title, des, price ... to database
handleUpload = (isUpload)=> {
  if(isUpload) {
    const {userID, title, description, price, locationPostcode, locationState, locationSuburb, category, numberOfPhoto, imageURL} =this.state;
    const locationState_category = locationState + '_' +category;
    var timeUpload = firebase.database.ServerValue.TIMESTAMP;
    var imageName0 = {url:''};
// console.log(uriFirebase, 'uriFirebase state');

      try{

            firebase.database().ref('Items')
            .push({userID, title, description, price, locationPostcode, locationState, locationSuburb, category, numberOfPhoto,locationState_category, timeUpload,imageName0, imageURL:''})
            .then(snap => {          
              itemID = snap.key;
              this.setState({itemID})        
            })
            .then(()=> {this.handleUploadImage()})
          }

      catch(error) {
        console.log(error.toString)
      }
  }
  }
handleImagePickerCrop(){
  ImagePicker.openPicker({
    multiple: true,
    compressImageQuality: 0.4,
    compressImageMaxWidth: 400,
    compressImageMaxHeight: 400
  }).then(images => {
    var photos = [];
    images.map((image)=> {
    var imageURL = image.path;
    photos = [...photos, imageURL];
    })

    var numberOfPhoto = photos.length;
    this.setState({
      photos,
      numberOfPhoto,
    })
  });
}
handleUploadThumnail(){
  
  var url =this.state.thumbnailURL;
  console.log(url, 'in thumnail');
  
  ImageResizer.createResizedImage(url, 50, 50,'JPEG', 80).then((response) => {
    var uri = response.path;
    console.log(uri, 'Thumnail uri');
    
    new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        let uploadBlob = null;


        const imageRef = firebase.storage().ref('items/' + itemID).child('imageName'+i);

        fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close();

          return(imageRef.getDownloadURL())         
        })
        .then((url)=>{ 
          uploadPhoto(url, this.state.itemID);
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
      })
      uploadPhoto= (imageUrl, itemID) => {

        if(numberOfPhoto===0) {
          var url = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
          firebase.database().ref('Items/'+itemID+'/thumbnail').push({url});
    
        } else {
          firebase.database().ref('Items/'+itemID+'/thumbnail').push({url:imageUrl});
        }
      }

     
    // response.uri is the URI of the new image that can now be displayed, uploaded...
    // response.path is the path of the new image
    // response.name is the name of the new image with the extension
    // response.size is the size of the new image
  }).catch((err) => {
    // Oops, something went wrong. Check that the filename is correct and
    // inspect err to get more details.
  });
}
  handleUploadImage= ( mime = 'image/jpg') => {

      const {photos, itemID, numberOfPhoto} = this.state

      Promise.all(photos.map((uri, i) => {
        

        return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
          let uploadBlob = null;


          const imageRef = firebase.storage().ref('items/' + itemID).child('imageName'+i);

          fs.readFile(uploadUri, 'base64')
          .then((data) => {
            return Blob.build(data, { type: `${mime};BASE64` })
          })
          .then((blob) => {
            uploadBlob = blob
            return imageRef.put(blob, { contentType: mime })
          })
          .then(() => {
            uploadBlob.close();

            return(imageRef.getDownloadURL())         
          })
          .then((url)=>{ resolve(url)})
          .catch((error) => {
            reject(error)
          })

      })

    }))
    .then(()=> this.handleUploadImageURL(), err => {
      console.log(err, 'handleUploadImage');
      
    })
    .then(()=> this.handleUploadThumnail())
    .then(()=> {
      this.props.navigation.navigate('Detail', {
        itemID: this.state.itemID,
        numberOfPhoto: this.state.numberOfPhoto,
        photos: this.state.photos
    })
  
  }, err => {
    console.log(err, 'navigate in dangtin');
    
  })
}
handleUploadImageURL(){
  var storage = firebase.storage();
  var {numberOfPhoto, itemID} = this.state;

  //Upload thumbnail url 
  // var thumbnailURL = this.state.thumbnailURL;
  // firebase.database().ref('Items/'+itemID).update({thumbnailURL})

    if(numberOfPhoto===0) {
      let imageName = '/imageName0';
      var url = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
      firebase.database().ref('Items/'+itemID+'/imageURL').push({url});

    } else {
      var images = [];
        for(let i=0; i< numberOfPhoto; i++) {
          let imageName = '/imageName'+i;
          var pathReference = storage.ref('items/' + itemID + imageName);
          pathReference.getDownloadURL()
          .then((url)=> {

            var imageObject = new Object();
            var imageKey = firebase.database().ref('Items/'+itemID+'/imageURL').push().key;
            imageObject[imageKey]= url;
            console.log(itemID, 'itemID');
            
            firebase.database().ref('Items/'+itemID+'/imageURL').update(imageObject);
            // firebase.database().ref('Items/'+itemID+imageName).update({url});
          }, err => console.log(err, 'loi xay ra trong trang detail')
          )
        }
       
    };
}

handleLocationState(value: string) {
  this.setState({
    locationState: value
  });

}

  render() {
    const {title, description, price, locationPostcode, locationState, locationSuburb, category} =this.state;

    return (
      <Container>
        <HeaderDangTin itemID = {this.state.itemID} photos= {this.state.photos} onHandleUpload={this.handleUpload} onHandleUriFireBase ={(uri)=> this.setState({uriFirebase:uri})}/>

        <ScrollView>
          //Photo
              <Button onPress={()=> this.handleImagePickerCrop()}> 
                <Text>
                  open piker
                  </Text>
                </Button>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
              <TouchableOpacity onPress={this.handleSelectImage}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#dddddd', alignItems: 'center', justifyContent:'center', flexDirection:'column', paddingTop:10}}>
                    
                            <Icon style={{ fontSize: 30,}} name="ios-camera-outline" /> 
                            <Text style={{fontSize: 12,  }}> Thêm hình</Text>
                    
                    </View>
                </TouchableOpacity>           
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingTop: 10}}>
                  {this.state.photos.map((p,i) => {return (
                      <ImageBackground key={i} source={{uri: p}} style={{width: 80, height: 80, paddingHorizontal:10, marginLeft: 20}} > 
                      <TouchableOpacity onPress={() => this.removeImageUpload(i)} >
                          <Icon type="FontAwesome" name= "times-circle" color="#4F8EF7" fontSize={80} style={{ position: 'absolute', top: -10, left: 60 }} />
                      </TouchableOpacity>
                    </ImageBackground>

                  )})}
                </ScrollView>
              </View>

          //Photo

          //Tilte
<Content>

  <Form  style={{flex: 1, paddingTop: 0}}>
    <Item stackedLabel>
      <Label>Nhập tên sản phẩm</Label>
      <Input onChangeText={(title)=> this.setState({title})}/>
    </Item>
  </Form>
</Content>


          //Tilte

          //Descrition
    <Content padder>
          <Form>
           <Textarea onChangeText={(description)=> this.setState({description})} rowSpan={5} bordered placeholder="Nhập mô tả sản phẩm" />
         </Form>
       </Content>
          //Descrition

          //Gia
          <Form  style={{flex: 1, paddingTop: 0}}>
            <Item stackedLabel>
              <Label>Giá</Label>
              <Input onChangeText={(price)=> this.setState({price})}/>
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
          
          //Postcode
          <Form  style={{flex: 1, paddingTop: 0}}>
            <Item stackedLabel>
              <Label>Postcode</Label>
              <Input onChangeText={(locationPostcode)=> this.setState({locationPostcode})} />
            </Item>
          </Form>

            //Suburb
          <Form  style={{flex: 1, paddingTop: 0}}>
            <Item stackedLabel>
              <Label>Suburb</Label>
              <Input onChangeText={(locationSuburb)=> this.setState({locationSuburb})} />
            </Item>
          </Form>

          //State

          <Form style={{}}>
            <Picker
              mode="dropdown"
              placeholder="State"
              placeholderStyle={{ color: "#bfc6ea" }}
              iosHeader="Select your SIM"
              iosIcon={<Icon name="md-arrow-dropdown" />}
              style={{ width: undefined }}
              selectedValue={this.state.locationState}
              onValueChange={this.handleLocationState.bind(this)}
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



        </ScrollView>

      </Container>
    );
  }
}

export default withNavigation(DangTin);
