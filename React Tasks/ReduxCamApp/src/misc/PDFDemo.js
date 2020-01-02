import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
export default class PDFDemo extends Component {
  imagePDF = () => {
    // const page1 = PDFPage.create()
    //   .setMediaBox(200, 200)
    //   .drawText('You can add text and rectangles to the PDF!', {
    //     x: 5,
    //     y: 235,
    //     color: '#007386',
    //   })
    //   .drawRectangle({
    //     x: 25,
    //     y: 25,
    //     width: 150,
    //     height: 150,
    //     color: '#FF99CC',
    //   })
    //   .drawRectangle({
    //     x: 75,
    //     y: 75,
    //     width: 50,
    //     height: 50,
    //     color: '#99FFCC',
    //   });

    let jpgPath =
      '/storage/emulated/0/Android/data/com.reduxcamapp/files/images.jpg';

    //'./assets/logo.jpg';
    // const pngPath = './assets/homeLogo.png';

    const page2 = PDFPage.create()
      .setMediaBox(300, 300)
      .drawImage(jpgPath, 'jpg', {
        x: 10,
        y: 125,
        width: 200,
        height: 200,
      });
    //   .drawImage(pngPath, 'png', {
    //     x: 5,
    //     y: 25,
    //     width: 200,
    //     height: 100,
    //   });

    var RNFS = require('react-native-fs');

    // const docsDir = RNFS.ExternalDirectoryPath;
    const docsDir = RNFetchBlob.fs.dirs.PictureDir;
    console.log(docsDir);
    const pdfPath = `${docsDir}/sample.pdf`;

    PDFDocument.create(pdfPath)
      .addPages(page2)
      .write() // Returns a promise that resolves with the PDF's path
      .then(path => {
        console.log('PDF created at: ' + path);
      });
  };

  //   rnfsWriteDemo() {
  //     // React Native FS code for creating normal text file.
  //     // This method is called from the render()

  //     var RNFS = require('react-native-fs');

  //     // create a path you want to write to
  //     // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
  //     // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable

  //     var path = RNFS.ExternalDirectoryPath + '/test.txt';

  //     // ExternalDirectoryPath is the path - /storage/emulated/0/Android/data/com.reduxcamapp/files

  //     console.log(RNFS.ExternalDirectoryPath);
  //     // write the file
  //     RNFS.writeFile(
  //       path,
  //       'MOHAMMED OMER QUADRI 22 DECCAN COLLEGE OF ENGINEERING AND TECHNOLOGY INFORMATION TECHNOLOGY BACHELOR OF ENGINEERING',
  //       'utf8',
  //     )
  //       .then(success => {
  //         console.log('FILE WRITTEN!');
  //       })
  //       .catch(err => {
  //         console.log(err.message);
  //       });
  //   }
  //   rnfsReadDemo() {
  //     alert('Hello');
  //   }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.imagePDF()} style={styles.Btn}>
          <Text style={styles.BtnText}>Open PDF</Text>
        </TouchableOpacity>

        {/*  
        <TouchableOpacity
          onPress={() => this.rnfsWriteDemo()}
          style={styles.Btn}>
          <Text style={styles.BtnText}>Create file</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.rnfsReadDemo()}
          style={styles.Btn}>
          <Text style={styles.BtnText}>Read file</Text>
        </TouchableOpacity> */}
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
