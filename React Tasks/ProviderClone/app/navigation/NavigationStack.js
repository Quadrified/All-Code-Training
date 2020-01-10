import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthStack from './AuthStack';
import Splash from '../screens/Splash/Splash';
import AppStack from './AppStack';

const NavigationStack = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
    AuthStack: {
      screen: AuthStack,
    },
    AppStack: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(NavigationStack);
