import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LoginPageContainer from './src/Component/LoginPage';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginPage />
        <Text>Hello</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffdf9',
  },
});
