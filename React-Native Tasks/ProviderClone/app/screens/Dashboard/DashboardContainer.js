import React, {Component} from 'react';
import DashboardView from './DashboardView';

export default class DashboardContainer extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return <DashboardView />;
  }
}
