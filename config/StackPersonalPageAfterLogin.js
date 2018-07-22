
import {
  Platform,
  StyleSheet,
  View,
  Image

} from 'react-native';
import {createStackNavigator} from  'react-navigation'


import {StackUserItemPosted} from './StackUserItemPosted'
import PersonalPageAfterLogin from '../Screen/Components/CaNhan/PersonalPageAfterLogin'


export const StackPersonalPageAfterLogin = createStackNavigator({
    PersonalPageAfterLogin: {
    screen: PersonalPageAfterLogin,
    headerTitle: 'Trang cá Nhân'
  },
  StackUserItemPosted: {
    screen: StackUserItemPosted
  },
},
{
    headerMode: 'none',
    
  }
);
