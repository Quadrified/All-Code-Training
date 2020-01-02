import React, {Component} from 'react';
import {BarChart, Grid} from 'react-native-svg-charts';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class BarChartExample extends Component {
  render() {
    const fill = 'rgb(134, 65, 244)';
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      null,
      85,
      undefined,
      //   0,
      //   0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
      53,
      -53,
      24,
      50,
      -20,
      -80,
      -8,
      100,
    ];

    return (
      <View style={styles.areaView}>
        <BarChart
          style={{height: 200}}
          data={data}
          svg={{fill}}
          contentInset={{top: 30, bottom: 30}}>
          <Grid />
        </BarChart>
        <TouchableOpacity
          onPress={() => {
            alert('Progress circle');
          }}>
          <Text style={styles.areaText}> Bar chart </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaView: {
    alignContent: 'space-around',
    justifyContent: 'center',
    margin: 50,
  },
  areaText: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 10,
  },
});
