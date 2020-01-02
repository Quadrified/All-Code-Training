import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {Input, Button, CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class LoginView extends Component {
  renderLogo() {
    return (
      <View style={styles.logoContainer}>
        <Image
          style={styles.logostyle}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.loginText}>Please Login to continue.</Text>
      </View>
    );
  }

  renderUID() {
    return (
      <Input
        label="User ID"
        autoCapitalize="none"
        labelStyle={{paddingBottom: 10, fontSize: 20}}
        placeholder="Please enter your id"
        shake={true}
        errorStyle={{color: 'red'}}
        errorMessage=""
        inputContainerStyle={styles.UIDContainerStyle}
        inputStyle={styles.UIDInputStyle}
      />
    );
  }

  renderPassword() {
    return (
      <Input
        label="Password"
        labelStyle={{marginBottom: 10, fontSize: 20}}
        placeholder="Please enter your password"
        shake={true}
        errorStyle={{color: 'red'}}
        errorMessage=""
        secureTextEntry={true}
        //rightIcon={<Icon name="md-eye" size={24} color="#444" />}
        inputContainerStyle={styles.pwdContainerStyle}
        inputStyle={styles.passwordInputStyle}
      />
    );
  }

  renderForgotPassword() {
    return (
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderRememberMe() {
    return (
      <View style={styles.rememberMeContainer}>
        <CheckBox
          title="Keep me signed in"
          containerStyle={styles.rememberMeCheckboxContainer}
          textStyle={styles.rememberMeCheckboxText}
        />
      </View>
    );
  }
  renderLoginButton() {
    return (
      <Button
        buttonStyle={styles.loginButtonStyle}
        title="LOGIN"
        // onPress={() => {
        //   this.props.navigation.navigate('Dashboard');
        // }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogo()}
        <View style={styles.loginForm}>
          {this.renderUID()}
          <View style={{flexDirection: 'column'}}>
            {this.renderPassword()}
            {this.renderForgotPassword()}
          </View>
        </View>
        {this.renderRememberMe()}
        <View style={styles.loginButtonContainer}>
          {this.renderLoginButton()}
        </View>
      </View>
    );
  }
}

export default LoginView;
