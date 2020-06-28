import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/LoginLogo.png')}
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
