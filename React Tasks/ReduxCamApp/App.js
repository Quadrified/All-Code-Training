import React, {Component} from 'react';
import CameraFetchDemo from './src/CameraFetchDemo';
import RNCamDemo from './src/RNCamDemo';
import OtherCamDemo from './src/OtherCamDemo';
import PDFDemo from './src/PDFDemo';
import CameraRollDemo from './src/CameraRollDemo';
import CameraRollOnly from './src/CameraRollOnly';
import ImagePickerDemo from './src/ImagePicker';
class App extends Component {
  render() {
    // Works and gives path of cache : {file:///data/user/0/com.reduxcamapp/cache/Camera/4ce95ead-2f9e-4738-a8a7-3b9126054221.jpg}

    // return <CameraFetchDemo />;
    // return <CameraRollDemo />;
    // return <CameraRollOnly />;
    return <ImagePickerDemo />
    /*--------------------------------------------*/

    // Works and stores image in the state only which makes it temporary..
    // Also gives error : Error: Attempt to invoke virtual method 'int android.graphics.Bitmap.getWidth()' on a null object reference

    // return <RNCamDemo />;

    /*--------------------------------------------*/
    // Works and gives path of cache : {file:///data/user/0/com.reduxcamapp/cache/Camera/fc88c1f0-09e3-471a-aba6-2814006df752.jpg}

    // return <OtherCamDemo />;
    /*--------------------------------------------*/
    // To create PDFs

    // return <PDFDemo />;
  }
}
export default App;
