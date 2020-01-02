import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class CombinedNavigations extends Component {
  render() {
    return (
      <View>
        <Text> App Home </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
