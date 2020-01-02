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
class CameraRollDemo extends Component {
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
        .then(() =>
          setTimeout(() => {
            CameraRoll.getPhotos({
              first: 1,
            })
              .then(r => {
                const page2 = PDFPage.create()
                  .setMediaBox(300, 300)
                  .drawImage(
                    '/0/Pictures/7cf2e9b0-4447-4f13-8f8f-b90c68b9b909.jpg',
                    'jpg',
                    {
                      x: 10,
                      y: 125,
                      width: 200,
                      height: 200,
                    },
                  );
                console.log(r.edges[0].node.image.uri);
                const docsDir = RNFetchBlob.fs.dirs.PictureDir;

                const pdfPath = `${docsDir}/sample.pdf`;

                console.log('PDF Path:  ' + pdfPath);

                PDFDocument.create(pdfPath)
                  .addPages(page2)
                  .write()
                  .then(path => {
                    console.log('PDF created at: ' + path);
                  })
                  .catch(err => console.log('err:', err));
              })
              .catch(err => console.log('err:', err));
          }, 2000),
        )
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

export default CameraRollDemo;

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

//   imagePDF = () => {
//     let jpgPath =
//       '/storage/emulated/0/Android/data/com.reduxcamapp/files/images.jpg';

//     //'./assets/logo.jpg';
//     // const pngPath = './assets/homeLogo.png';

//     const page2 = PDFPage.create()
//       .setMediaBox(300, 300)
//       .drawImage(jpgPath, 'jpg', {
//         x: 10,
//         y: 125,
//         width: 200,
//         height: 200,
//       });
//     //   .drawImage(pngPath, 'png', {
//     //     x: 5,
//     //     y: 25,
//     //     width: 200,
//     //     height: 100,
//     //   });

//     var RNFS = require('react-native-fs');

//     const docsDir = RNFS.ExternalDirectoryPath;
//     const pdfPath = `${docsDir}/sample.pdf`;
//     // console.log(docsDir);
//     // console.log('Hello');
//     // console.log(pdfPath);

//     /** Code breaks here
//      * from PDFDocument.create(pdfPath) to the console.log('PDF created at: ' + path);
//      * */

//     PDFDocument.create(pdfPath)
//       .addPages(page2)
//       .write() // Returns a promise that resolves with the PDF's path
//       .then(path => {
//         console.log('PDF created at: ' + path);
//       });
//   };

/* RNFetchBlob.fs.mkdir(`${RNFetchBlob.fs.dirs.PictureDir}/DemoFolder`);

      //   console.log('Created folder');

      //   await RNFetchBlob.fs
      //     .mv(
      //       jpgPath,
      //       `${RNFetchBlob.fs.dirs.PictureDir}/DemoFolder/${moment().unix()}.jpg`,
      //     )
      //     .catch(console.log('err:', err)); */

//   let jpgPath = data.uri;

//   console.log('Jpg:  ' + jpgPath);

//   //   await RNFetchBlob.fs
//   //     .mv(jpgPath,
//   //       `${RNFetchBlob.fs.dirs.PictureDir}/DemoFolder/${moment().unix()}.jpg`,
//   //     ).then(console.log('Moved'))
//   //     .catch(console.log('err:', err));

//   /** PDF Creation */

//   console.log('Beginning PDF creation..');

//   const page2 = PDFPage.create()
//     .setMediaBox(300, 300)
//     .drawImage(jpgPath, 'jpg', {
//       x: 10,
//       y: 125,
//       width: 200,
//       height: 200,
//     });

//   const docsDir = RNFetchBlob.fs.dirs.PictureDir;
//   console.log('docsDir:   ' + docsDir);

//   const pdfPath = `${docsDir}/sample.pdf`;
//   console.log('PDF Path:  ' + path);

//   PDFDocument.create(pdfPath)
//     .addPages(page2)
//     .write()
//     .then(path => {
//       console.log('PDF created at: ' + path);
//     })
//     .catch(err => console.log('err:', err));
