import React, {Component} from 'react';
import PatientsTabView from './PatientsTabView';

export default class PatientsTabContainer extends Component {
  static navigationOptions = {
    title: 'Patients',
  };
  render() {
    return <PatientsTabView />;
  }
}
