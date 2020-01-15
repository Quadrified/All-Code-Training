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

// import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';
import ImagePicker from 'react-native-image-crop-picker';
import {PDFDocument} from 'pdf-lib';

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
    }).then(async image => {
      console.log(image);
      let jpgPath = image.path;
      const jpgImageBytes = await fetch(jpgPath).then(
        async res => await res.arrayBuffer(),
      );
      const pdfDoc = PDFDocument.create();
      const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
      const jpgDims = jpgImage.scale(0.25);
      const page = pdfDoc.addPage();
      page.drawImage(jpgImage, {
        x: page.getWidth() / 2 - jpgDims.width / 2 + 75,
        y: page.getHeight() / 2 - jpgDims.height,
        width: jpgDims.width,
        height: jpgDims.height,
      });
      const pdfBytes = await pdfDoc.save();
      console.log(pdfBytes);

      /* Adding image to PDF page with page & image dimensions */
      //   const page = PDFPage.create()
      //     .setMediaBox(1090, 1400)
      //     .drawImage(jpgPath, 'jpg', {
      //       x: 0,
      //       y: 0,
      //       width: 1000,
      //       height: 1400,
      //     });

      //   console.log('PDF PAGE CREATED..');

      //   const docsDir = RNFetchBlob.fs.dirs.PictureDir;
      //   console.log('PICTURE DIRECTORY:  ' + docsDir);
      //   const pdfPath = `${docsDir}/${moment().unix()}.pdf`;
      //   console.log('PDF PATH:  ' + pdfPath);

      //   console.log('BREAKS HERE..!');

      //   /* PDF creation */

      //   PDFDocument.create(pdfPath)
      //     .addPages(page)
      //     .write()
      //     .then(path => {
      //       console.log('PDF created at: ' + path);

      //       // Alerting the user with:

      //       Alert.alert(
      //         'Yay! Your PDf is ready',
      //         'Your PDF is stored at: ' + path,
      //         //
      //         [
      //           {
      //             text: 'Great!',
      //             onPress: () => {},
      //           },
      //         ],
      //         {cancelable: false},
      //       );

      //       /* Toast */
      //       ToastAndroid.showWithGravityAndOffset(
      //         'Your image is stored at: ' + docsDir,
      //         ToastAndroid.LONG,
      //         ToastAndroid.BOTTOM,
      //         25,
      //         25,
      //       );
      //     });
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

/** import { PDFDocument } from 'pdf-lib'
     const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
      const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
      
      // Fetch PNG image
      const pngUrl = 'https://pdf-lib.js.org/assets/minions_banana_alpha.png'
      const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())

      // Create a new PDFDocument
      const pdfDoc = await PDFDocument.create()

      // Embed the JPG image bytes and PNG image bytes
      const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
      const pngImage = await pdfDoc.embedPng(pngImageBytes)

      // Get the width/height of the JPG image scaled down to 25% of its original size
      const jpgDims = jpgImage.scale(0.25)

      // Get the width/height of the PNG image scaled down to 50% of its original size
      const pngDims = pngImage.scale(0.5)

      // Add a blank page to the document
      const page = pdfDoc.addPage()

      // Draw the JPG image in the center of the page
      page.drawImage(jpgImage, {
        x: page.getWidth() / 2 - jpgDims.width / 2,
        y: page.getHeight() / 2 - jpgDims.height / 2,
        width: jpgDims.width,
        height: jpgDims.height,
      })

      // Draw the PNG image near the lower right corner of the JPG image
      page.drawImage(pngImage, {
        x: page.getWidth() / 2 - pngDims.width / 2 + 75,
        y: page.getHeight() / 2 - pngDims.height,
        width: pngDims.width,
        height: pngDims.height,
      })

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()

 */
