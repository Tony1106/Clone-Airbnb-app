import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity

} from 'react-native';
import {Spinner} from 'native-base';
import {locationFilterData, categoryFilterData} from '../../../Asset/Data/dataSource'

import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

const {height, width} = Dimensions.get('window');

var _ = require('lodash');

class ListItemRaoVat extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      url: [],
      loading: true,
      refreshing: false,
      numbemLoadedItem: 10,
      isFilter: false,
      timeOfPresent: '',
      loadMoreData: true,

    }
    this.handleDownloadData = this.handleDownloadData.bind(this);
  }

  componentDidMount() {
    this.handleDownloadData();
    var timeOfPresent = Date.now();    
    this.setState({timeOfPresent})

}

componentWillReceiveProps(nextProps) {
  if(nextProps.filterLocation!==this.props.filterLocation||nextProps.filterCategory!==this.props.filterCategory ) {
    this.handleDownloadDataWithPropsChange(nextProps)

  }
  else if (nextProps.filter !==null) {
    this.handleFilterData(nextProps)
  }
 
  
 
}
handleFilterData(nextProps){
  var filter = nextProps.filter;
  console.log(filter, 'filter');
  
  var filterOption;
  var filterOrder;
  if (filter ==="key0") {
    filterOption = "price";
    filterOrder = "asc";
  } else if(filter ==="key1"){
    filterOption = "price";
    filterOrder = "desc";
  } else if(filter ==="key2"){
    filterOption = "timeUpload";
    filterOrder = "asc";
  }
  else if(filter ==="key3"){
    filterOption = "timeUpload";
    filterOrder = "desc";
  }
  console.log(filterOption, 'filterOption');  
  console.log(filterOrder, 'filterOrder');
  var data = this.state.data;
  var sortData = _.orderBy(data, filterOption, filterOrder);
  
  
  this.setState({data: sortData})
}
handleDownloadData = () => {  
  var roots = firebase.database().ref();
  var numbemLoadedItem = this.state.numbemLoadedItem;
  
  // filter location, category
const filterCategory = this.props.filterCategory;
const filterLocation = this.props.filterLocation;

  //defind orderbyChild
  var orderChild = '';
  var orderChildValue = '';
  var item = roots.child('Items').limitToFirst(numbemLoadedItem);
  var data = [];
      item.once('value', snap => {
        let result = snap.val();
        var data = snapshotToArray(snap);
        console.log(data, 'data in list item');      
        
        this.setState({
          data,
          loading: false,
          
    });
        
      }, err => {
        console.log('it is error fetching data firebase');
      })

// convernt object to array
  function snapshotToArray(snapshot) {
    var returnArr = [];
  
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
  return returnArr;
  
  };
}

handleDownloadDataWithPropsChange = (nextProps) => {
  var roots = firebase.database().ref();
  var numbemLoadedItem = this.state.numbemLoadedItem;

  // filter location, category
const filterCategory = nextProps.filterCategory;
const filterLocation = nextProps.filterLocation;
console.log(filterCategory, filterLocation, "filter");

  //defind orderbyChild

  var orderChild = '';
  var orderChildValue = '';
  if (filterLocation!==''&&filterCategory==='') {
    orderChild = 'locationState';
    orderChildValue = filterLocation;
  } else if(filterCategory!=='' && filterLocation==='') {
    orderChild = 'category';
    orderChildValue = filterCategory;
  } else {
    orderChild = 'locationState_category'
    orderChildValue = filterLocation + "_" +filterCategory;
  };
  console.log(orderChild, orderChildValue, 'child change');
  
  var item = roots.child('Items')
  .orderByChild(orderChild)
  .equalTo(orderChildValue)
  .limitToFirst(numbemLoadedItem);
  // getData(item);

  var data = [];
    item.once('value', snap => {
      let result = snap.val();
      var data = snapshotToArray(snap);
      this.setState({
        data,
        loading: false,
        isFilter: true,
  });
      
    }, err => {
      console.log('it is error fetching data firebase');
    })


// convernt object to array
  function snapshotToArray(snapshot) {
    var returnArr = [];
   
  
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key; 
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
      var bagde = ' giây trước'
    }
    else if (milliseconds<60000*60) {
      var time  = Math.round(milliseconds/60000);
      var bagde = ' phút trước'
    } else if (milliseconds<3600000*24){
      var time  = Math.round(milliseconds/3600000);
      var bagde = ' giờ trước'
    } else {
      var time  = Math.round(milliseconds/86400000);
      var bagde = ' ngày trước'
    }
    var timeStamp = time + bagde;

    return (
    <TouchableOpacity onPress={()=>this.onPressItem(item.key, item.numberOfPhoto)}>
      <View  style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 20}}>
        <Image onPress={this.navigate} style={{height: width/5, width: width/5, backgroundColor:'grey'}} source={{uri: Object.values(item.imageURL)[0]}}/>
        <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'space-around', paddingHorizontal: 10}}>
          <Text style={{fontSize:13, textAlign: 'left'}}> {item.title}</Text>
          <Text style={{color: 'red', fontSize:15, fontWeight: "700"}}> {item.price} $</Text>
          <Text style={{fontSize:10}}> {item.locationSuburb} | {locationName} | {timeStamp}</Text>
        </View>

      </View>
    </TouchableOpacity>

  )}

  onPressItem = (key, numberOfPhoto)=> {
    this.props.navigation.navigate('Detail', {
      itemID: key,
      numberOfPhoto: numberOfPhoto
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
    console.log(this.state.data.length, 'length data');
    
      if (this.state.numbemLoadedItem > this.state.data.length+20) return null 
      else {
        var numbemLoadedItem= this.state.numbemLoadedItem + 10;
        console.log(numbemLoadedItem, 'numberload item');
        this.setState({numbemLoadedItem, loading: true});
        this.state.isFilter? this.handleDownloadDataWithPropsChange(): this.handleDownloadData();
      
      }
      
  }
  render() {

    return (

      <FlatList
         data={this.state.data}
         renderItem={this.renderItem}
         keyExtraction = {(item, index) => item.key}
         ItemSeparatorComponent ={this.ItemSeparatorComponent}
         ListFooterComponent = {this.renderFooter}
         ListHeaderComponent = {this.renderHeader}
         refreshing = {this.state.refreshing}
         onRefresh = {this.handleRefeshing}
         onEndReachedThreshold ={0}
         onEndReached = {this.handleLoadMore}

       />

    );
  }
}

const styles = StyleSheet.create({

})
export default withNavigation(ListItemRaoVat);
