import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class AreaChartDemo extends Component {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
      100,
      50,
      75,
      -50,
    ];

    return (
      <View style={styles.container}>
        {/* <View style={styles.areaView}> */}
        <AreaChart
          style={{height: 200, margin: 30}}
          data={data}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
          <Grid />
        </AreaChart>
        <TouchableOpacity
          onPress={() => {
            alert('Progress circle');
          }}>
          <Text style={styles.areaText}> Area chart </Text>
        </TouchableOpacity>
        {/* </View> */}
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

  areaView: {
    alignItems: 'center',
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
