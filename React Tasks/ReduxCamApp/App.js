import React, {Component} from 'react';
import ConverterDemo from './src/ConverterDemo';
import Cropper from './src/CroppedConverter';
import NewLib from './src/NewPDFlib';

class App extends Component {
  render() {
    // return <ConverterDemo />;
    // return <Cropper />;
    return <NewLib />;
  }
}
export default App;
