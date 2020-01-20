/* IMAGE TO PDF CONVERTER */
import React, {Component} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import ImagePicker2 from 'react-native-image-crop-picker';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

// TODO: Add Image cropper

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

  /* Allows picking Image from Gallery */
  chooseImage = () => {
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
      }
    });
  };

  /* Allows clicking Image from native camera */

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
      /* PDF creation from the picked image */
      console.log('PDF CREATION STARTS...');

      let jpgPath = response.path;
      console.log('JPG path:  ' + jpgPath);

      /* Adding image to PDF page with page & image dimensions */

      const page = PDFPage.create()
        .setMediaBox(1095, 1500)
        .drawImage(jpgPath, 'jpg', {
          x: 0,
          y: 0,
          width: 1150,
          height: 1480,
        });

      const docsDir = RNFetchBlob.fs.dirs.PictureDir;
      console.log('PICTURE DIRECTORY:  ' + docsDir);
      const pdfPath = `${docsDir}/${moment().unix()}.pdf`;

      /* PDF creation */

      PDFDocument.create(pdfPath)
        .addPages(page)
        .write()
        .then(path => {
          console.log('PDF created at: ' + path);

          // Alerting the user with:

          Alert.alert(
            'Yay! Your PDf is ready',
            'Your PDF is stored at: ' + path,
            //
            [
              {
                text: 'Great!',
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

          /* Toast */
          ToastAndroid.showWithGravityAndOffset(
            'Your image is stored at: ' + docsDir,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            25,
          );
        });
    });
  };

  launchImageLibrary = () => {
    ImagePicker2.openPicker({
      width: 1080,
      height: 1920,
      cropping: true,
      showCropFrame: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      console.log(image);
      let jpgPath = image.path;
      console.log('JPG path:  ' + jpgPath);
      const docsDir = RNFetchBlob.fs.dirs.PictureDir;

      // Alerting the user with:

      Alert.alert(
        'Image cropped successfully!',
        'Your image is stored at: ' + jpgPath,
        [
          {
            text: 'Great!',
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
        <Image source={require('./assets/dummy.jpeg')} style={styles.images} />
      );
    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.images} />;
    } else {
      return (
        <Image source={require('./assets/dummy.jpeg')} style={styles.images} />
      );
    }
  }
  render() {
    return (
      <View style={{position: 'absolute'}}>
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
            {/* <TouchableOpacity
              onPress={this.chooseImage}
              style={styles.btnSection}
              activeOpacity={0.1}>
              <Text style={styles.btnText}>Choose File </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={this.launchCamera}
              style={styles.btnSection}
              activeOpacity={0.1}>
              <Text style={styles.btnText}>Camera </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.launchImageLibrary}
              style={styles.btnSection}
              activeOpacity={0.1}>
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
    borderRadius: 20 / 3,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 250,
    height: 60,
    backgroundColor: '#FBB040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
