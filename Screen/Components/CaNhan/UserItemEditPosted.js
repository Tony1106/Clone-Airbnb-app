import React, { Component  } from 'react';
import {View, Platform, ScrollView,Image,Dimensions,TouchableOpacity, AsyncStorage, ImageBackground} from 'react-native'
import { Container,Picker,  Header, Text, Item, Label, Input,Content,Textarea, Left, Body, Right, Button, Icon, Title,Form } from 'native-base';
import { withNavigation} from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import PhotoUpload from '../DangTin/PhotoUpload';
import HeaderDangTin from '../DangTin/HeaderDangTin';

import * as firebase from 'firebase';


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
class UserItemEditPosted extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
      selected2: undefined,
      photos: [],
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
      timeUpload:'',
      imageURL: [],
      imageDeleteID: [],
      imageObject: {},
      thumbnailURL: '',


    };
  }
  componentDidMount(){
    const itemID = this.props.navigation.getParam('itemID', 'no-ID');

    
    var ref = firebase.database().ref().child('Items/' +itemID);
    ref.once('value', snap => {
      const item =  snap.val();
      console.log(Object.values(item), 'item');
      
      var { title, price, description, location, category, locationState, locationSuburb, locationPostcode, numberOfPhoto} = item;
        imageObject = item.imageURL;
        var imageURL = Object.values(imageObject);
        // var imageArray = snapshotToArray(imageObject);
        // console.log(imageArray, 'imageARRAY');
        
        this.setState({
            data: item, 
            imageURL,
            imageObject
        })
        console.log(imageObject, 'imageObject');
        
    //   //to array
    //     function snapshotToArray(snapshot) {
           
    //         var returnArr = [];
    //         snapshot.forEach(function(childSnapshot) {
    //             var item = childSnapshot.val();
    //             item.key = childSnapshot.key;
    //             returnArr.push(item);
    //         });
    //       return returnArr;
          
    //       };

    function getMapValue(obj, key) {
        if (obj.hasOwnProperty(key))
           return obj[key];
        throw new Error("Invalid map key."); 
     }
      this.setState({
        title, price, description, location, category, itemID, locationState, locationSuburb, locationPostcode, numberOfPhoto
      })
      console.log(this.state.itemID, 'state id');
      

    })
    
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
      category: value
    });
  }

  handleSelectImage =()=> {
    
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
          var thumbnailURL = photos[0];
          var numberOfPhoto = photos.length;
          this.setState({
            photos,
            thumbnailURL,
            numberOfPhoto,
          })
        });
}

//Upload title, des, price ... to database
handleSubmitEdit = ()=> {
 
    const {itemID, userID, title, description, price, locationPostcode, locationState, locationSuburb, category, numberOfPhoto, imageURL} =this.state;
    const locationState_category = locationState + '_' +category;
    var timeEdit = firebase.database.ServerValue.TIMESTAMP;
    var imageName0 = {url:''};
// console.log(uriFirebase, 'uriFirebase state');
console.log(itemID,this.state.itemID, 'itemID');

      try{
    firebase.database().ref('Items/'+itemID)
            .update({title, description, price, locationPostcode, locationState, locationSuburb, category, numberOfPhoto,locationState_category, timeEdit,imageName0})
            .then(()=> {this.handleUploadImage()})
          }

      catch(error) {
        console.log(error.toString)
      }
  }
  


  handleUploadImage= (mime = 'image/jpg') => {

      const {photos, itemID, numberOfPhoto} = this.state

      Promise.all(photos.map((photo, i) => {
        const imageRef = firebase.storage().ref('items/' + itemID).child('imageName'+i);

        if(!photo.includes('firebasestorage')) {
            return new Promise((resolve, reject) => {
                const uploadUri = Platform.OS === 'ios' ? photo.replace('file://', '') : photo;
                  let uploadBlob = null;
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
        }
    }))
    .then(()=> this.handleUploadImageURL(), err => {
      console.log(err, 'handleUploadImage');
      
    })
    .then(()=> {
      this.props.navigation.navigate('Detail', {
        itemID: this.state.itemID,
        numberOfPhoto: this.state.numberOfPhoto
    })
  
  }, err => {
    console.log(err, 'navigate in dangtin');
    
  })
}
removeImage(imageComponentURL, i){
    console.log(imageComponentURL, i, 'key of delete');
    
    var {imageURL, imageObject, data} = this.state;

    var imageDeleteID = this.state.imageDeleteID;  
    
   
    delete imageObject[i];

imageURl = Object.values(imageObject);
    this.setState({imageDeleteID, imageObject, imageURL})
    




    
    // var numberOfPhoto = this.state.numberOfPhoto;
  
    // imageURL.splice(i,1);
    // numberOfPhoto = numberOfPhoto-1;
    // console.log(imageURL, 'imageURL after remove');
    // this.setState({imageURL,numberOfPhoto});
}
removeImageUpload(i) {
    photos = this.state.photos;
    photos.splice(i,1);
    this.setState({photos})
}
handleUploadImageURL(){
    var storage = firebase.storage();
    var {numberOfPhoto, itemID} = this.state;
  
    //Upload thumbnail url 
    var thumbnailURL = this.state.thumbnailURL;
    firebase.database().ref('Items/'+itemID+'/thumbnailURL').update({thumbnailURL})
  
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
    const {title, description, price, locationPostcode,photos, locationState, locationSuburb, category,imageObject} =this.state;
    var imageUpload = photos.map((photo, i)=> {
        return( 
        <ImageBackground  key={i} source={{uri: photo}} style={{width: 80, height: 80, paddingHorizontal:10, marginLeft: 20}} > 
        <TouchableOpacity  onPress={() => {console.log(i, 'key in each compotn'), this.removeImageUpload(i)}} >
            <Icon type="FontAwesome" name= "times-circle" color="#4F8EF7" fontSize={80} style={{ position: 'absolute', top: -10, left: 60 }} />
        </TouchableOpacity>
      </ImageBackground>)
    });

    var imageComponentX = [];
    for (var key in imageObject) {
      

            var i = key;
            var imageComponentURL = imageObject[key];
            imageComponentX.push(
    
                       
            <ImageBackground  key={i} source={{uri: imageComponentURL}} style={{width: 80, height: 80, paddingHorizontal:10, marginLeft: 20}} > 
              <TouchableOpacity  onPress={() => {console.log(i, 'key in each compotn'), this.removeImage(imageComponentURL, i)}} >
                  <Icon type="FontAwesome" name= "times-circle" color="#4F8EF7" fontSize={80} style={{ position: 'absolute', top: -10, left: 60 }} />
              </TouchableOpacity>
            </ImageBackground>
    
          );

             
   } 

    
    return (
      <Container>
         <Header>
        <Left>
          <Button transparent onPress={()=> this.props.navigation.navigate('UserItemPosted')}>
            <Text> Bo qua </Text>
          </Button>
        </Left>
        <Body>
          <Title>Chỉnh sửa tin đăng</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.handleSubmitEdit}>
            <Text> Hoan Tat </Text>
          </Button>
        </Right>
      </Header>

        <ScrollView>
          //Photo

              <View style={{flexDirection: 'row', paddingTop: 10}}>
              <TouchableOpacity onPress={this.handleSelectImage}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#dddddd', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>
                    
                            <Icon style={{ fontSize: 30,}} name="ios-camera-outline" /> 
                            <Text style={{fontSize: 12,  }}> Thêm hình</Text>
                    
                    </View>
                </TouchableOpacity>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingTop: 10}}>
               {imageComponentX}
               {imageUpload}
                {/* {imageURL.map((p,i) => {return (

                   
                  <ImageBackground key={i} source={{uri: p}} style={{width: 80, height: 80, paddingHorizontal:10, marginLeft: 20}} > 
                    <TouchableOpacity onPress={() => this.removeImage(i)} >
                        <Icon type="FontAwesome" name= "times-circle" color="#4F8EF7" fontSize={80} style={{ position: 'absolute', top: -10, left: 60 }} />
                    </TouchableOpacity>
                  </ImageBackground>

                )})} */}
                </ScrollView>
              </View>

          //Photo

          //Tilte
<Content>

  <Form  style={{flex: 1, paddingTop: 0}}>
    <Item stackedLabel>
      <Label>Nhập tên sản phẩm</Label>
      <Input value={title} onChangeText={(title)=> this.setState({title})}/>
    </Item>
  </Form>
</Content>


          //Tilte

          //Descrition
    <Content padder>
          <Form>
           <Textarea value={description} onChangeText={(description)=> this.setState({description})} rowSpan={5} bordered placeholder="Nhập mô tả sản phẩm" />
         </Form>
       </Content>
          //Descrition

          //Gia
          <Form  style={{flex: 1, paddingTop: 0}}>
            <Item stackedLabel>
              <Label>Giá</Label>
              <Input value = {price} onChangeText={(price)=> this.setState({price})}/>
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
              selectedValue={this.state.category}
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
              <Input value={locationPostcode} onChangeText={(locationPostcode)=> this.setState({locationPostcode})} />
            </Item>
          </Form>

            //Suburb
          <Form  style={{flex: 1, paddingTop: 0}}>
            <Item stackedLabel>
              <Label>Suburb</Label>
              <Input value = {locationSuburb} onChangeText={(locationSuburb)=> this.setState({locationSuburb})} />
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

export default withNavigation(UserItemEditPosted);
