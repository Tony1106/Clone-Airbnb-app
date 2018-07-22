import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage

} from 'react-native';
import {Spinner, Container, Header, Button, Left , Body, Title, Right} from 'native-base';
import {locationFilterData, categoryFilterData} from '../../../Asset/Data/dataSource'
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

const {height, width} = Dimensions.get('window');

class UserItemPosted extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      url: [],
      loading: true,
      refreshing: false,
      numbemLoadedItem: 6,
      isFilter: false,
      timeOfPresent:''

    }
    this.handleDownloadData = this.handleDownloadData.bind(this);
  }

  componentDidMount() {
    this.handleDownloadData();
    var timeOfPresent = Date.now();    
    this.setState({timeOfPresent})
}


handleDownloadData = () => {  
  var roots = firebase.database().ref();
  var numbemLoadedItem = this.state.numbemLoadedItem;

  var userID =  AsyncStorage.getItem("userID").then((res)=> {
    var item = roots.child('Items')
    .orderByChild('userID')
    .equalTo(res);
    item.once('value', snap => {
      let result = snap.val();
      var data = snapshotToArray(snap);
      console.log(data, 'data in list item');
      
      this.setState({
        data,
        loading: false
  });     
    }, err => {
      console.log('it is error fetching data firebase');
    })
  })

  
 

// convernt object to array
  function snapshotToArray(snapshot) {
    var returnArr = [];
  
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        if(!item.imageName0.url) {item.imageName0 ='https://www.freeiconspng.com/uploads/no-image-icon-6.png'} else {item.imageName0 =item.imageName0.url}; //tr ansfer to thumnail later 
        returnArr.push(item);
    });
  return returnArr;
  
  };
}


  renderItem = ({item}) => {

    var locationState = item.locationState;
    var locationName = locationFilterData[locationState];
    var timeUpload = item.timeUpload;
    var milliseconds = this.state.timeOfPresent - timeUpload;
    
    if (milliseconds<60000){
      var time  = Math.round(milliseconds/1000);
      var bagde = ' giây trước';
    } else if (milliseconds<60000*60) {
      var time  = Math.round(milliseconds/60000);
      var bagde = ' phút trước';
    } else if (milliseconds<3600000*24){
      var time  = Math.round(milliseconds/3600000);
      var bagde = ' giờ trước'
    } else {
      var time  = Math.round(milliseconds/86400000);
      var bagde = ' ngày trước'
    }
    var timeStamp = time + bagde;

    return (
    <TouchableOpacity onPress={()=>this.onPressItem(item.key)}>
      <View  style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 20}}>
        <Image onPress={this.navigate} style={{height: width/5, width: width/5, backgroundColor:'grey'}} source={{uri: Object.values(item.imageURL)[0]}}/>
        <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'space-around', paddingHorizontal: 10}}>
          <Text style={{fontSize:13, textAlign: 'left'}}> {item.title}</Text>
          <Text style={{color: 'red', fontSize:15, fontWeight: "700"}}> {item.price} $</Text>
          <Text style={{fontSize:10}}> {item.locationSuburb} | {locationName} | {timeStamp}</Text>
        </View>
        <View>
          <Button warning style={{height: 30}}>
            <Text> 
              Chỉnh Sửa
            </Text>
          </Button>
          <Button success style={{height: 30, marginTop: 10}}>
            <Text> 
              Lên Top
            </Text>
          </Button>
        </View>

      </View>
    </TouchableOpacity>

  )}

  onPressItem = (key)=> {
    this.props.navigation.navigate('UserItemEditPosted', {
      itemID: key,


    })
  }
  // navigate = () => {this.props.navigation.navigate('Detail')};
  ItemSeparatorComponent = () => (
    <View style={{height: 1, backgroundColor: '#dddddd', marginTop: 10}}>

    </View>
  )

  renderFooter = () => {
    if (!this.state.loading & this.state.data.length <7) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
          <Spinner color='green' />
      </View>
    );
  };

  renderHeader = () => {
    if (!this.state.refreshing) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
          <Spinner color='green' />
      </View>
    );
  };

  handleRefeshing = () => {
    this.state.isFilter? this.handleDownloadDataWithPropsChange(): this.handleDownloadData();
  }

  handleLoadMore = () => {

    var numbemLoadedItem= this.state.numbemLoadedItem + 10;
    console.log(numbemLoadedItem, 'numberload item');
    
    this.setState({numbemLoadedItem, loading: true},  this.state.isFilter? this.handleDownloadDataWithPropsChange(): this.handleDownloadData())
  }
  render() {

    return (
      <Container> 
      <Header>
          <Left>
            <Button transparent  onPress={() =>this.props.navigation.navigate('PersonalPageAfterLogin')} style={{}}>
              <Icon  style={{fontSize: 25}} name='ios-arrow-back-outline'/>
            </Button>
          </Left>
          <Body>
            <Title>Tin đã đăng</Title>
          </Body>
          <Right>                   
          <Button transparent>
              
            </Button>
          </Right>
        </Header>
      <FlatList
         data={this.state.data}
         renderItem={this.renderItem}
         keyExtraction = {(item, index) => item.key}
         ItemSeparatorComponent ={this.ItemSeparatorComponent}
        //  ListFooterComponent = {this.renderFooter}
         ListHeaderComponent = {this.renderHeader}
         refreshing = {this.state.refreshing}
         onRefresh = {this.handleRefeshing}
        //  onEndReachedThreshold ={0}
        //  onEndReached = {this.handleLoadMore}

       />
      </Container>
    );
  }
}


export default withNavigation(UserItemPosted);
