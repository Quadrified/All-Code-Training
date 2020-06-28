import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default class FilterView extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text> Filter Screen </Text>
      </View>
    );
  }
}
