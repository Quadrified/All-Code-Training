import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.headerView}>
          <Text style={styles.headerText}>COUNTER APP</Text>
        </View>

        <TouchableOpacity
          style={styles.IncreaseBtn}
          onPress={() => this.props.increaseCounter()}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#52307C',
            }}>
            Increase
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            marginLeft: 20,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {this.props.counter}
        </Text>

        <View>
          <TouchableOpacity
            style={styles.IncreaseBtn}
            onPress={() => this.props.decreaseCounter()}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#52307C',
              }}>
              Decrease
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.IncreaseBtn}
            onPress={() => this.props.clearCounter()}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#52307C',
              }}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    clearCounter: () => dispatch({type: 'CLEAR_COUNTER'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#136a8a',
  },
  IncreaseBtn: {
    fontSize: 25,
    marginLeft: 40,
    padding: 10,
    width: 130,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    height: 60,
    fontFamily: 'sans-serif-thin',
  },

  BtnText: {
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#52307C',
  },

  headerText: {
    fontSize: 40,
    fontStyle: 'italic',
    marginLeft: 10,
  },

  headerView:{
      borderColor: '#fff',
  }
});
