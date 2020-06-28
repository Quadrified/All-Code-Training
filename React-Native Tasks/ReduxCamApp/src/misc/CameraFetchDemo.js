import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {RNCamera} from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';

// Exporting App
class CameraFetchDemo extends Component {
  render() {
    return <AppContainer />;
  }
}

class MainScreen extends Component {
  static NavigationOptions = {
    header: null,
  };

  getData() {
    alert('File uploaded');
  }

  async makeFolder() {
    try {
      await RNFetchBlob.fs.mkdir(
        `${RNFetchBlob.fs.dirs.PictureDir}/myNewfolder`,
      );

      console.log(RNFetchBlob.fs.dirs.PictureDir);
      console.log('Created folder');
    } catch {
      //   console.log('Cannot create folder');
    }
  }

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
        {/* <TouchableOpacity style={styles.Btn} onPress={this.getData}>
          <Text style={styles.BtnText}>Upload file</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.Btn} onPress={this.makeFolder}>
          <Text style={styles.BtnText}>Create folder</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.Btn} onPress={this.showClicked}>
          <Text style={styles.BtnText}>Captured image</Text>
        </TouchableOpacity> */}
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
  render() {
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
          }}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
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
                  style={styles.capture}>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: 'center',
                        paddingTop: 30,
                      }}>
                      {' '}
                      SNAP{' '}
                    </Text>
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
    //  const data = await camera.takePictureAsync(options);
    try {
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);

      const {uri} = data.uri;
      await RNFetchBlob.fs.mkdir(
        `${RNFetchBlob.fs.dirs.PictureDir}/myCameraPicture`,
      );

      console.log(RNFetchBlob.fs.dirs.PictureDir);
      await RNFetchBlob.fs.mv(
        uri,
        `${RNFetchBlob.fs.dirs.PictureDir}/myfolder/${moment().unix()}.jpg`,
      );
      console.log(data.api);
    } catch {
      console.log('Cannot store the image!!');
    }

    // return (
    //   <View
    //     style={{
    //       flex: 1,
    //       height: 40,
    //       width: 40,
    //       borderWidth: 1,
    //       borderColor: 'black',
    //     }}>
    //     <Image source={{uri: data.path}} style={{width: 100, height: 100}} />
    //   </View>
    // );
  };
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
    initialRouteName: 'Home',
  },
);

// const AppSwitch = createSwitchNavigator({
//   Home: MainScreen,
//   Next: AppStack,
// });

const AppContainer = createAppContainer(AppStack);

export default CameraFetchDemo;

/**  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options).then(data => {
        ToastAndroid.show(data.uri, ToastAndroid.SHORT);
        CameraRoll.saveToCameraRoll(data.uri);
        console.log(data);
      });
      console.log(data.uri);
    }
  }; */
