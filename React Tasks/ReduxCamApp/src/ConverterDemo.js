import React, {Component} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class ConverterDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
  }

  chooseImage = () => {
    // Allows picking Image from Gallery

    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));

        // console.log('response', JSON.stringify(response));

        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });

        console.log('Pdf starts...');
        //TODO: Add PDF converter on picking an image
      }
    });
  };

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        // console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }

      console.log('PDF CREATION STARTS...');

      let jpgPath = response.path;

      console.log('JPG path:  ' + jpgPath);

      const page2 = PDFPage.create()
        .setMediaBox(300, 300)
        .drawImage(jpgPath, 'jpg', {
          x: 10,
          y: 125,
          width: 200,
          height: 200,
        });

      const docsDir = RNFetchBlob.fs.dirs.PictureDir;
      console.log('PICTURE DIRECTORY:  ' + docsDir);
      const pdfPath = `${docsDir}/${moment().unix()}.pdf`;

      PDFDocument.create(pdfPath)
        .addPages(page2)
        .write()
        .then(path => {
          console.log('PDF created at: ' + path);

          // Alerting the user with:
          // Alert
          //   alert('Your PDF is created and stored at: ' + path);
          Alert.alert(
            'PDF created',
            'Your PDF is stored at: ' + path,
            [
              {
                text: 'OK',
                onPress: () =>
                  this.setState({
                    filePath: '',
                    fileData: '',
                    fileUri: '',
                  }),
              },
            ],
            {cancelable: false},
          );

          // Toast
          //   ToastAndroid.showWithGravityAndOffset(
          //     'Your PDF is created and stored at: ' + path,
          //     ToastAndroid.LONG,
          //     ToastAndroid.BOTTOM,
          //     25,
          //     50,
          //   );
        });
    });
  };

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  renderFileData() {
    if (this.state.fileData) {
      return (
        <Image
          source={{uri: 'data:image/jpeg;base64,' + this.state.fileData}}
          style={styles.images}
        />
      );
    } else {
      return (
        <Image source={require('./assets/dummy.png')} style={styles.images} />
      );
    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.images} />;
    } else {
      return (
        <Image source={require('./assets/dummy.png')} style={styles.images} />
      );
    }
  }
  render() {
    return (
      <View>
        {/* <StatusBar barStyle="dark-content" /> */}
        <View style={styles.body}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              paddingBottom: 10,
              fontStyle: 'italic',
            }}>
            Pick Images from Camera & Gallery
          </Text>

          <View style={styles.ImageSections}>
            <View>
              {this.renderFileData()}
              <Text style={{textAlign: 'center'}}>Captured Image</Text>
            </View>

            {/* <View>
              {this.renderFileUri()}
              <Text style={{textAlign: 'center'}}>File Uri</Text>
            </View> */}
          </View>

          <View style={styles.btnParentSection}>
            <TouchableOpacity
              onPress={this.chooseImage}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Choose File </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.launchCamera}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Camera </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.launchImageLibrary}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Gallery </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 0.5,
    marginHorizontal: 3,
    marginBottom: 10,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 250,
    height: 65,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
