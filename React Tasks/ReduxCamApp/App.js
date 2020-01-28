import React, {Component} from 'react';
import ConverterDemo from './src/ConverterDemo';
import Cropper from './src/CroppedConverter';
/**
 *Use ConverterDemo.js for Image to PDF converter
 *Use Cropped Converter for only image Cropping
 */
class App extends Component {
  render() {
    return <ConverterDemo />;
  }
}
export default App;
