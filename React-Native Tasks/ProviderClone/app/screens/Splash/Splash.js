import React, {Component} from 'react';
import {Image, StatusBar, View} from 'react-native';
import styles from './styles';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('AuthStack');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          style={styles.logo}
          source={require('./../../../assets/splash.png')}
        />
      </View>
    );
  }
}
