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

export default class LoginScreen extends Component {
  //   static navigationOptions = {
  //     header: null,
  //   };

  state = {
    username: '',
    password: '',
  };

  userChangeHandler = val => {
    this.setState({
      username: val,
    });
  };

  passwordChangeHandler = val => {
    this.setState({
      password: val,
    });
  };

  onLogin = () => {
    if (this.state.user === '' || this.state.password === '') {
      Alert.alert('Please fill the correct details');
    } else {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      fetch('http://182.74.68.177:8080/login', {
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
            this.props.navigation.navigate('Dashboard');
          }
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
          source={require('../../assets/LoginLogo.png')}
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
            <Text style={styles.loginBtnText}>Back..</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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

/*.then(responseJson => {
          this.setState({
            username: responseJson.username,
            password: responseJson.password,
          });
        }) */
