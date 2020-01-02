import React, {Component} from 'react';
import ProfileView from './ProfileView';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return <ProfileView />;
  }
}
