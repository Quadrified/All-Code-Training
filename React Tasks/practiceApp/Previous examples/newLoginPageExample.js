import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

/*
  TODO: Add Back navigation to welcome screen  
  TODO: Add new screen to replace dashboard
  TODO: Add and design SignUp screen
  TODO: Design the bottom tab styles
  TODO: Add 'Focus on tab for login and sign up input fields
  TODO: Add splash screen
  TODO: Add icon to the app
  TODO: Comment the code
  TODO: Add app icon

  FIXME: Fix the alert on wrong credentials
  
*/

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./src/assets/LoginLogo.png')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Dashboard')}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>DASHBOARD</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboardddd</Text>
      </View>
    );
  }
}

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    user: '',
    password: '',
  };

  userChangeHandler = val => {
    this.setState({
      user: val,
    });
  };

  passwordChangeHandler = val => {
    this.setState({
      password: val,
    });
  };

  onLogin = () => {
    if (this.state.user === '' || this.state.password === '') {
      Alert.alert('Please fill the details');
    } else if (this.state.user === 'user' && this.state.password === 'user') {
      this.props.navigation.navigate('Dashboard');
    } else {
      alert('Incorrect details. Please enter valid details..');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./src/assets/LoginLogo.png')}
        />

        <TextInput
          style={styles.textInput}
          value={this.state.user}
          onChangeText={this.userChangeHandler}
          placeholder="Enter User ID"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.textInput}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={this.passwordChangeHandler}
          placeholder="Enter Password"
          ref={input => {
            this.secondTextInput = input;
          }}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPwd}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onLogin}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Welcome')}>
          <View style={styles.loginBtn}>
            <Text style={(styles.loginBtnText, {width: 100})}>Back..</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}> Your Feed </Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}> Your Profile </Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}> Settings </Text>
      </View>
    );
  }
}

const AppTab = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings,
  },

  // For Material bottom tab
  //   {
  //     activeColor: '#f0edf6',
  //     inactiveColor: '#3e2465',
  //     barStyle: {backgroundColor: '#008080'},
  //   },
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
  },

  //   {
  //     defaultNavigationOptions: ({navigation}) => {
  //       return {
  //         headerLeft: <Icon name="bars" size={30} onPress = {this.props.navigation.openDrawer()} />,
  //       };
  //     },
  //   },
);

const AppDrawer = createDrawerNavigator({
  Dashboard: {
    screen: AppStack,
  },
});

const AppSwitch = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Dashboard: AppDrawer,
  Login: {screen: LoginScreen},
});

const AppContainer = createAppContainer(AppSwitch);

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
  },

  textInput: {
    width: 350,
    margin: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#fffdf9',
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
