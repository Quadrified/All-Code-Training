import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNImageToPdf from 'react-native-image-to-pdf';

export default class RNCamDemo extends Component {
  state = {
    // img: require('./assets/logo.png'),
    show: false,
  };

  async capture() {
    const img = await this.refs.cam.takePictureAsync({quality: 0.5});
    this.setState({img, show: false});
  }

  upload() {
    alert('Uploaded');
    // this.setState({img: require('./assets/logo.png'), show: false});
  }

  render() {
    return this.state.show ? (
      <View style={styles.container}>
        <RNCamera ref="cam" style={StyleSheet.absoluteFill} />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 20,
            //alignSelf: 'center',
            flexDirection: 'row',
            // position: 'absolute',
          }}>
          <Button
            icon={<Icon name="camera" size={40} color="white" />}
            onPress={() => this.capture()}
            buttonStyle={{
              position: 'absolute',
              bottom: 0,
              width: 100,
            }}
          />
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={{
            borderRadius: 30,
            alignSelf: 'center',
            width: 230,
            height: 230,
          }}
        />
        <TouchableOpacity
          onPress={() => this.setState({show: true})}
          style={styles.Btn}>
          <Text style={styles.BtnText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  responseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
  },

  Btn: {
    padding: 10,
    width: 350,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    height: 60,
    fontFamily: 'sans-serif-thin',
  },

  BtnText: {
    padding: 8,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#52307C',
  },

  capture: {
    flex: 1,
    // backgroundColor: '#fff',
    borderRadius: 250,
    padding: 20,
    alignSelf: 'center',
    width: '30%',
    height: '50%',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
