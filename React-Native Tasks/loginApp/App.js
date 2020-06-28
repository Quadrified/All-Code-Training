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
      // Alert.alert('Please fill the correct details');
    } else {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      // http://182.74.68.177:8030/api/v1/
      fetch('http://182.74.68.177:8030/api/v1/', 
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);

          if (response == "USERNAME DOESN'T EXIST") {
            alert('Enter valid credentials');
          } else if (response == 'PASSWORD IS INVALID') {
            alert('Enter valid credentials');
          } else {
            alert('Login Successful');
          }

          console.log(response);
        })
        .catch(error => {
          console.log(error);
          //   alert('Enter valid credentials');
          // console.log(error);
        });

      console.log(JSON.stringify(data));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./src/bat-black-silhouette-with-opened-wings.png')}
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

const StackContainer = createStackNavigator(
  {
    Login: LoginPage,
  },
  {
    initialRouteName: 'Login',
  },
);
const AppContainer = createAppContainer(StackContainer);

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
    color: '#00CCCD',
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
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00BCCD',
  },
});

/** if (response == "USERNAME DOESN'T EXIST") {
              alert('Enter valid credentials');
            } else if (response == 'PASSWORD IS INVALID') {
              alert('Enter valid credentials');
            } else {
              alert('Login Successful');
            } */
