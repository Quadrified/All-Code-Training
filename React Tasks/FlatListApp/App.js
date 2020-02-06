import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import JwtDecode from 'jwt-decode';

export default class App extends Component {
  onDecode() {
    var token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWUzYWE2ZmE4YzBjNDU3ZDBiZDZmYzE0Iiwicm9sZSI6IlBhdGllbnQiLCJJc1N1YnNjcmliZWQiOnRydWUsImlhdCI6MTU4MDk5MjE1MywiZXhwIjoxNTgxMDEzNzUzfQ.wEQOyfh4VlY5sAbSY9pXYQaaIrBVrlp4j9l6n1gSXn4';

    var decoded = JwtDecode(token);
    console.log(decoded);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 100, height: 50}}>
          <TouchableOpacity onPress={this.onDecode}>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                borderWidth: 2,
                margin: 10,
              }}>
              Decode
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
  },
});
