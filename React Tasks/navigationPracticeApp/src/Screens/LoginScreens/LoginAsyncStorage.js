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
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginAsyncStorage extends Component {
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

  onSaveData = () => {
    let user = 'user';
    let password = 'user';

    AsyncStorage.setItem('user', user);
    AsyncStorage.setItem('password', password);
  };

//   onShowData = async () => {
//     try {
//       let user = await AsyncStorage.getItem('user');
//       let password = await AsyncStorage.getItem('password');

//       console.log(user);
//       console.log(password);
//     } catch (error) {
//       alert(error);
//     }
//   };

  onLogin = async () => {

    let user = await AsyncStorage.getItem('user');
    let password = await AsyncStorage.getItem('password');

    if (this.state.user === '' || this.state.password === '') {
      Alert.alert('Please fill the details');
    } else if (this.state.user === user && this.state.password === password) {
      Alert.alert('Login Success');
    } else {
      console.log(AsyncStorage.getItem('user'));
      alert('Incorrect details. Please enter valid details..');
    }
  };

  componentDidMount() {
    this.onSaveData();
    // this.onShowData();
  }

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
        {/* <TouchableOpacity onPress={this.onSaveData}>
          <View style={styles.saveBtn}>
            <Text style={styles.loginBtnText}>SAVE DATA</Text>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={this.onShowData}>
          <View style={styles.showBtn}>
            <Text style={styles.loginBtnText}>SHOW DATA</Text>
          </View>
        </TouchableOpacity> */}
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

  saveBtn: {
    padding: 10,
    margin: 5,
    width: 150,
    backgroundColor: '#eee',
    borderRadius: 10,
    textAlign: 'center',
    height: 60,
    fontFamily: 'sans-serif-thin',
  },

  showBtn: {
    padding: 10,
    margin: 10,
    width: 150,
    backgroundColor: '#eee',
    borderRadius: 10,
    textAlign: 'center',
    height: 60,
    fontFamily: 'sans-serif-thin',
  },

  saveShowFont: {},

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
