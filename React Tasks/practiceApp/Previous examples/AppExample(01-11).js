import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./src/assets/logo.png')}
        />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontStyle: 'italic',
            padding: 10,
          }}>
          Tap to Login
        </Text>
        <Button
          title="LOGIN"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 110, alignContent: 'flex-start'}}
          source={require('./src/assets/homeLogo.png')}
        />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontStyle: 'italic',
            padding: 10,
          }}>
          Tap to logout
        </Text>
        <Button
          title="LOGOUT"
          onPress={() => this.props.navigation.navigate('LogIn')}
        />

        <Button
          title="Go to next screen.."
          onPress={() => this.props.navigation.navigate('NewScreen')}
        />
      </View>
    );
  }
}

class NewScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'New Screen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./src/assets/logo.png')}
        />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontStyle: 'italic',
            padding: 10,
          }}>
          New Screen
        </Text>
        <Button
          title="Back to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeeee',
  },
});

// const RootStack = createStackNavigator(
//   {
//     Login: LogInScreen,
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: 'Login',
//   },
// );

const MyDrawerNavigator = createDrawerNavigator({
  LogIn: {
    screen: LogInScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  NewScreen: {
    screen: NewScreen,
  },
});

const AppContainer = createAppContainer(MyDrawerNavigator);
