import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

// Importing navigators
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// Importing all screens
import WelcomeScreen from '../Screens/LoginScreens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreens/LoginScreen';
import Feed from '../Screens/LoginScreens/Feed';
import Profile from '../Screens/LoginScreens/Profile';
import Settings from '../Screens/LoginScreens/Settings';
// import Dashboard from './Screens/DashboardScreen';

// Exporting App
class LoginAppNavigators extends Component {
  render() {
    return <AppContainer />;
  }
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  logo: {
    width: 180,
    height: 180,
    margin: 10,
    borderRadius: 100 / 4,
  },

  textInput: {
    width: 350,
    margin: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
    padding: 10,
    height: 50,
  },

  forgotPwd: {
    fontSize: 18,
    color: '#52307C',
    marginLeft: 200,
    margin: 10,
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
  },

  loginBtn: {
    padding: 10,
    width: 350,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    height: 60,
    fontFamily: 'sans-serif-thin',
  },

  loginBtnText: {
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#52307C',
  },
});

// All the navigators in this file

const AppTab = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings,
  },

  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: (
          <Text style={{fontSize: 20, textAlign: 'center', margin: 20}}>
            {routeName}
          </Text>
        ),
      };
    },
  },
);

const AppStack = createStackNavigator(
  {
    AppTab: AppTab,
    Welcome: WelcomeScreen,
  },

  //   {
  //     defaultNavigationOptions: ({navigation}) => {
  //       return {
  //         headerLeft: <Icon name='menu' size={30} style={{paddingLeft: 10}} />,
  //       };
  //     },
  //   },
);

const AppDrawer = createDrawerNavigator({
  Dashboard: {
    screen: AppStack,
  },
  Welcome: {
    screen: WelcomeScreen,
  },
});

const AppSwitch = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Dashboard: AppDrawer,
  Login: LoginScreen,
});

const AppContainer = createAppContainer(AppSwitch);

export default LoginAppNavigators;

// const LoginStack = createStackNavigator(
//   {
//     Login: LoginScreen,
//   },
//   {
//     initialRouteName: 'Login',
//   },
// );
