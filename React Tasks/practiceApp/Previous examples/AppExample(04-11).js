import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TextInput} from 'react-native-gesture-handler';
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

// WELCOME SCREEN
class WelcomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{borderColor: 'black'}}>
          <Image
            style={{width: 200, height: 200, borderRadius: 200 / 4, margin: 10}}
            source={require('./src/assets/logo.png')}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
          Hey, there!
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
          What's on your mind today?
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LogIn')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 21, fontWeight: 'bold', fontStyle: 'italic'}}>
            LOGIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 21, fontWeight: 'bold', fontStyle: 'italic'}}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// REGISTER SCREEN
class RegisterScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Register',
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignSelf: 'flex-start',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Welcome')}>
            <Image
              style={{
                width: 50,
                height: 50,
                margin: 10,
                marginBottom: 20,
                borderRadius: 100 / 2,
                alignSelf: 'flex-start',
              }}
              source={require('./src/assets/back.png')}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={{width: 150, height: 150, borderRadius: 200 / 2}}
          source={require('./src/assets/logo.png')}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontStyle: 'italic',
            margin: 10,
            textAlign: 'center',
          }}>
          New to DSmart?
        </Text>

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
          Register here!
        </Text>
        <TextInput
          style={{
            width: 300,
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#ffeeee',
          }}
          textAlign={'center'}
          placeholder="Enter your name"
        />
        <TextInput
          style={{
            width: 300,
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#ffeeee',
          }}
          textAlign={'center'}
          placeholder="Enter your email"
        />
        <TextInput
          style={{
            width: 300,
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#ffeeee',
          }}
          textAlign={'center'}
          placeholder="Enter a Password"
        />

        <TextInput
          style={{
            width: 300,
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#ffeeee',
          }}
          textAlign={'center'}
          placeholder="Enter the Password again"
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LogIn')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}>
            REGISTER NOW..
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Welcome')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class LogInScreen extends Component {
  state = {
    user: 'user',
    password: 'user',
  };

  onLogin = () => {
    if (this.state.user === '' && this.state.password === '') {
      Alert.alert('Enter the details');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 150, height: 150, borderRadius: 200 / 2}}
          source={require('./src/assets/logo.png')}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
            margin: 10,
            textAlign: 'center',
          }}>
          Welcome back!
        </Text>
        <TextInput
          style={{
            width: 300,
            margin: 10,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#ffeeee',
          }}
          textAlign={'center'}
          placeholder="Enter User ID"
        />

        <TextInput
          style={{
            width: 300,
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#ffeeee',
          }}
          textAlign={'center'}
          placeholder="Enter Password"
        />

        <TouchableOpacity
          onPress={this.onLogin}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Welcome')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>
            Back
          </Text>
        </TouchableOpacity>
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
          style={{
            margin: 20,
            width: 300,
            height: 110,
            alignContent: 'flex-start',
            borderRadius: 100 / 5,
          }}
          source={require('./src/assets/homeLogo.png')}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewScreen')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', fontStyle: 'italic'}}>
            Continue to Dashboard
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
          (OR)
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LogIn')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>
            LOGOUT
          </Text>
        </TouchableOpacity>
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
          style={{
            margin: 20,
            width: 300,
            height: 110,
            alignContent: 'flex-start',
            borderRadius: 100 / 5,
          }}
          source={require('./src/assets/homeLogo.png')}
        />
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
          Welcome to the dashboard!
        </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={{
            padding: 10,
            backgroundColor: '#ffee',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'italic',
              textAlign: 'center',
            }}>
            Beck to Home
          </Text>
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
    backgroundColor: '#3b5998',
  },
});

// const RootStack = createStackNavigator(
//   {
//     Welcome: {
//         screen: WelcomeScreen,
//       },
//       LogIn: {
//         screen: LogInScreen,
//       },
//       Register: {
//         screen: RegisterScreen,
//       },
//       Home: {
//         screen: HomeScreen,
//       },
//       NewScreen: {
//         screen: NewScreen,
//       },
//   },
//   {
//     initialRouteName: 'Welcome',
//   },
// );

const MyDrawerNavigator = createDrawerNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },

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
