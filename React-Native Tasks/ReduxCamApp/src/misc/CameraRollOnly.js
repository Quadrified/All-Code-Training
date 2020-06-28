import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {RNCamera} from 'react-native-camera';
import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';

// Exporting App
class CameraRollOnly extends Component {
  render() {
    return <AppContainer />;
  }
}

class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40, fontStyle: 'italic', margin: 15}}>
          Upload a file
        </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Camera')}
          style={styles.Btn}>
          <Text style={styles.BtnText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);
class CamScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      markedDate: moment(new Date()).format('YYYY-MM-DD'),
    };
  }

  render() {
    const today = this.state.currentDate;
    const date = moment(today).format('MMMM D, YYYY');

    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          //   flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={{
                    padding: 10,
                    width: 60,
                    backgroundColor: '#eee',
                    margin: 10,
                    borderRadius: 10,
                    textAlign: 'center',
                    height: 60,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Icon name="md-camera" size={40} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = {quality: 0.5, base64: true};
    try {
      const data = await camera.takePictureAsync(options);
      console.log('uri:  ' + data.uri);

      CameraRoll.saveToCameraRoll(data.uri)
        .then(console.log('Saved to gallery..'))
        .catch(err => console.log('err:', err));
    } catch (e) {
      console.log(e);
    }
  };
}

// All the navigators in this file

const AppStack = createStackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    Camera: {
      screen: CamScreen,
    },
  },
  {
    initialRouteName: 'Camera',
  },
);

const AppContainer = createAppContainer(AppStack);

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
    width: 230,
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
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    width: '100%',
    height: '100%',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CameraRollOnly;
