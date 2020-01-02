import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class LoginPage extends Component {
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
      this.props.navigation.navigate('Home');
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

const AppTabNavigator = createBottomTabNavigator(
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

const StackContainer = createStackNavigator(
  {
    Login: LoginPage,
    Home: AppTabNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

const SwitchContainer = createSwitchNavigator(
  {
    Login: LoginPage,
    Home: AppTabNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(SwitchContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffdf9',
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
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#52307C',
  },
});
