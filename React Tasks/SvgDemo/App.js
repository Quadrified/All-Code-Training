import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

// Charts
import AreaChartDemo from './src/AreaChartDemo';
import StackedAreaDemo from './src/StackedAreaDemo';
import BarChartDemo from './src/BarChartDemo';
import StackedAreaAxis from './src/StackedAreaAxis';
import ProgressCircleDemo from './src/ProgressCircleDemo';
import LayeredChartDemo from './src/LayeredChartDemo';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native SVG Charts</Text>
        </View>
        <ScrollView>
          <ProgressCircleDemo />
          <AreaChartDemo />
          <StackedAreaDemo />
          <BarChartDemo />
          <StackedAreaAxis />
          <LayeredChartDemo />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    backgroundColor: '#1287A5',
    padding: 10,
    borderBottomRightRadius: 100 / 5,
    borderBottomLeftRadius: 100 / 5,
  },
  headerText: {
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
