
import {
    Platform,
    StyleSheet,
    View,
    Image
  
  } from 'react-native';
  import {createStackNavigator} from  'react-navigation'
  

  import UserItemPosted from '../Screen/Components/CaNhan/UserItemPosted'
  import UserItemEditPosted from '../Screen/Components/CaNhan/UserItemEditPosted'
  import PersonalPageAfterLogin from '../Screen/Components/CaNhan/PersonalPageAfterLogin'
  
  
  export const StackUserItemPosted = createStackNavigator({
    UserItemPosted: {
      screen: UserItemPosted
    },
    UserItemEditPosted: {
        screen: UserItemEditPosted
    }
  },
  {
      headerMode: 'none',
      
    }
  );
  