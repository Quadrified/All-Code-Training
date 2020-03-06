import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FlatList from './src/Flatlist';

export default class App extends Component {
  render() {
    return <FlatList />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
