
import {createStackNavigator, SwitchNavigator, createSwitchNavigator} from  'react-navigation'
import {View, Platform, ScrollView,Image,Dimensions, AsyncStorage} from 'react-native'
import PersonalPageAfterLogin from '../Screen/Components/CaNhan/PersonalPageAfterLogin'
import PersonalPageBeforeLogin from '../Screen/Components/CaNhan/PersonalPageBeforeLogin'
import {StackPersonalPageAfterLogin} from './StackPersonalPageAfterLogin'
import {isSignedIn} from '../Screen/Components/Auth/Auth'
import AuthLoadingPage from '../Screen/Components/CaNhan/AuthLoadingPage' 


export const PersonalStack = SwitchNavigator({
    AuthLoadingPage: {
      screen: AuthLoadingPage
    },
    PersonalPageAfterLogin: {
    screen: StackPersonalPageAfterLogin
  },
  PersonalPageBeforeLogin: {
    screen: PersonalPageBeforeLogin  }
}, {
 
  initialRouteName:  'AuthLoadingPage'
});

