import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';
import LoginApp from './src/LoginApp';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      id: '',
      body: '',
    };
  }

  getData = () =>
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          title: responseJson.title,
          id: responseJson.id,
          body: responseJson.body,
        });
      })
      .catch(error => {
        console.log(error);
      });

  render() {
    return (
      <View style={styles.container}>
        <Button title="Get Data" onPress={this.getData} />
        <Text>{this.state.title}</Text>
        <Text>{this.state.id}</Text>
        <Text>{this.state.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
