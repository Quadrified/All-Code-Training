import React, {Component} from 'react';
import {StackedAreaChart} from 'react-native-svg-charts';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import * as shape from 'd3-shape';

export default class StackedAreaDemo extends Component {
  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
      },
    ];

    const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
    const keys = ['apples', 'bananas', 'cherries', 'dates'];
    const svgs = [
      {onPress: () => console.log('apples')},
      {onPress: () => console.log('bananas')},
      {onPress: () => console.log('cherries')},
      {onPress: () => console.log('dates')},
    ];

    return (
      <View style={styles.areaView}>
        <StackedAreaChart
          style={{height: 200, paddingVertical: 16}}
          data={data}
          keys={keys}
          colors={colors}
          curve={shape.curveNatural}
          showGrid={false}
          svgs={svgs}
        />
        <TouchableOpacity
          onPress={() => {
            alert('Progress circle');
          }}>
          <Text style={styles.areaText}> Stacked Area chart </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaView: {
    alignContent: 'center',
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
