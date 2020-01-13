/* IMAGE TO PDF CONVERTER */
import React, {Component} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
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

import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';
import ImagePicker from 'react-native-image-crop-picker';

// TODO: Add Image cropper

export default class ConverterDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
    };
  }

  /* Allows clicking Image from native camera */

  launchCamera = () => {
    ImagePicker.openCamera({
      width: 1080,
      height: 1920,
      cropping: true,
      showCropFrame: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      console.log(image);
      this.setState({
        path: image.path,
      });
      /* PDF creation from the picked image */
      console.log('PDF CREATION STARTS...');

      let jpgPath = image.path;
      console.log('JPG path:  ' + jpgPath);

      /* Adding image to PDF page with page & image dimensions */
      const page = PDFPage.create()
        .setMediaBox(1090, 1400)
        .drawImage(jpgPath, 'jpg', {
          x: 0,
          y: 0,
          width: 1000,
          height: 1400,
        });

      const docsDir = RNFetchBlob.fs.dirs.PictureDir;
      console.log(RNFetchBlob.fs.dirs);
      console.log('PICTURE DIRECTORY:  ' + docsDir);

      const downloadDir = RNFetchBlob.fs.dirs.DownloadDir;
      const pdfPath = `${downloadDir}/${moment().unix()}.pdf`;
      console.log('PDF PATH:  ' + pdfPath);
      console.log('BREAKS HERE..!');

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
                // onPress: () =>
                //   this.setState({
                //     filePath: '',
                //     fileData: '',
                //     fileUri: '',
                //   }),
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

          {/* <View style={styles.ImageSections}>
            <View>
              {this.renderFileData()}
              <Text style={{textAlign: 'center'}}>Captured Image</Text>
            </View>
          </View> */}

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

            {/* <TouchableOpacity
              onPress={this.launchImageLibrary}
              style={styles.btnSection}
              activeOpacity={0.1}>
              <Text style={styles.btnText}>Gallery </Text>
            </TouchableOpacity> */}
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

/**The reasons can include -

No read permission
The image file is corrupt
There is not enough memory to decode the file
The resource does not exist
Invalid options specified in the options variable.

*/
