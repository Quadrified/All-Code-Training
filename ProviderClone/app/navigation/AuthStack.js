import {createStackNavigator} from 'react-navigation-stack';
import LoginContainer from '../screens/Login/';

const AuthStack = createStackNavigator(
  {
    login: {
      screen: LoginContainer,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'login',
  },
);

export default AuthStack;
