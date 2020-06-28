import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class LoginPageContainer extends Component {
  render() {
    return <AppContainer />;
  }
}

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/LoginLogo.png')}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter User ID"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter Password"
          ref={input => {
            this.secondTextInput = input;
          }}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPwd}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// class NewScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           style={{
//             margin: 20,
//             width: 300,
//             height: 110,
//             alignContent: 'flex-start',
//             borderRadius: 100 / 5,
//           }}
//           source={require('../assets/homeLogo.png')}
//         />
//         <Text
//           style={{
//             fontSize: 35,
//             fontWeight: 'bold',
//             fontStyle: 'italic',
//             textAlign: 'center',
//           }}>
//           Welcome to the dashboard!
//         </Text>

//         <TouchableOpacity
//           onPress={() => this.props.navigation.navigate('Login')}
//           style={{
//             padding: 10,
//             backgroundColor: '#ffee',
//             margin: 10,
//             borderRadius: 10,
//           }}>
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: 'bold',
//               fontStyle: 'italic',
//               textAlign: 'center',
//             }}>
//             Beck to Home
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Feed Pane </Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Your Profile </Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
      </View>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({
  Feed,
  Profile,
  Settings,
});

const StackContainer = createStackNavigator(
  {
    Login: LoginPage,
    Home: AppTabNavigator,
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