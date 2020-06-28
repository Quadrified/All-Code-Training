import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';

import RNCamera from 'react-native-camera';

const PicturePath = '';

export default class CamDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: 'back',
      mirrorMode: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
          type={this.state.cameraType}
          mirrorImage={this.state.mirrorMode}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]
          </Text>
          <Text style={styles.capture} onPress={this.storePicture.bind(this)}>
            [UPLOAD]
          </Text>
          <Text
            style={styles.capture}
            onPress={this.changeCameraType.bind(this)}>
            [SWITCH O ROONEY]
          </Text>
        </RNCamera>
      </View>
    );
  }

  changeCameraType() {
    if (this.state.cameraType === 'back') {
      this.setState({
        cameraType: 'front',
        mirrorMode: true,
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirrorMode: false,
      });
    }
  }

  storePicture() {
    if (PicturePath) {
      // Create the form data object
      var data = new FormData();
      data.append('picture', {
        uri: PicturePath,
        name: 'selfie.jpg',
        type: 'image/jpg',
      });

      // Create the config object for the POST
      // You typically have an OAuth2 token that you use for authentication
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data;',
          Authorization: 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH',
        },
        body: data,
      };

      fetch('https://postman-echo.com/post', config)
        .then(responseData => {
          // Log the response form the server
          // Here we get what we sent to Postman back
          console.log(responseData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  takePicture() {
    this.camera
      .capture()
      .then(data => {
        console.log(data);
        PicturePath = data.path;
      })
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
});
