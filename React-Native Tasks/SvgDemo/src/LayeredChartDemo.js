import React from 'react';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

class LayeredChartDemo extends React.PureComponent {
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
    ];
    const data2 = [
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
    ].reverse();

    return (
      <View style={styles.areaView}>
        <View style={{height: 200}}>
          <AreaChart
            style={{flex: 1}}
            data={data}
            svg={{fill: 'rgba(134, 65, 244, 0.5)'}}
            contentInset={{top: 20, bottom: 20}}
            curve={shape.curveNatural}>
            <Grid />
          </AreaChart>
          <AreaChart
            style={StyleSheet.absoluteFill}
            data={data2}
            svg={{fill: 'rgba(34, 128, 176, 0.5)'}}
            contentInset={{top: 20, bottom: 20}}
            curve={shape.curveNatural}
          />
          <TouchableOpacity
            onPress={() => {
              alert('Progress circle');
            }}>
            <Text style={styles.areaText}> Layered chart </Text>
          </TouchableOpacity>
        </View>
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
export default LayeredChartDemo;
