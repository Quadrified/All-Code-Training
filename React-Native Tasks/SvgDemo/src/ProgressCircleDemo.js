import React, {Component} from 'react';
import {ProgressCircle} from 'react-native-svg-charts';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
class ProgressCircleDemo extends Component {
  render() {
    return (
      <View style={styles.areaView}>
        <ProgressCircle
          style={{height: 200}}
          progress={0.5}
          progressColor={'#192A56'}
          startAngle={-Math.PI * 0.8}
          endAngle={Math.PI * 0.8}
        />
        <TouchableOpacity
          onPress={() => {
            alert('Progress circle');
          }}>
          <Text style={styles.areaText}> Progress Circle </Text>
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
    margin: 10
  },
});
export default ProgressCircleDemo;
