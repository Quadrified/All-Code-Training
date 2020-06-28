import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation';

// Importing Screens

import Dashboard from '../screens/Dashboard';
import Patients from '../screens/PatientsTab';
import Profile from '../screens/Profile';
import ConnectDevice from '../screens/ConnectDevice';
import PatientsDetails from '../screens/PatientsDetails';
import Filter from '../screens/Filter';

// Importing Icons

import DashboardIcon from './../../assets/icon-dashboard.svg';
import PatientsIcon from '../../assets/icon-patients.svg';
import ProfileIcon from '../../assets/icon-profile.svg';

// const TabBarComponent = props => <BottomTabBar {...props} />;
const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({navigation, navigationOptions}) => {
        const {routeName} = navigation.state;
        return {
          title: routeName,
          headerTitle: props => {
            const {children} = props;
            return <Text>{children}</Text>;
          },
          tabBarOptions: {
            activeBackgroundColor: '#0A6EAC',
            showIcon: true,
            style: {height: 65},
            labelStyle: {fontSize: 18, paddingBottom: 5},
            activeTintColor: '#F8F8F8', // active icon color
            inactiveTintColor: '#666666', // inactive icon color
          },
          tabBarIcon: props => {
            const {tintColor} = props;
            return <DashboardIcon width={50} height={20} fill={tintColor} />;
          },
        };
      },
    },
    Patients: {
      screen: Patients,
      navigationOptions: {
        title: 'Patients',
        headerTitle: props => {
          const {children} = props;
          return <Text>{children}</Text>;
        },
        tabBarOptions: {
          activeBackgroundColor: '#0A6EAC',
          showIcon: true,
          style: {height: 65},
          labelStyle: {fontSize: 18, paddingBottom: 5},
          activeTintColor: '#F8F8F8', // active icon color
          inactiveTintColor: '#666666', // inactive icon color
        },
        tabBarIcon: props => {
          const {tintColor} = props;
          return <PatientsIcon width={50} height={20} fill={tintColor} />;
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        headerTitle: props => {
          const {children} = props;
          return <Text>{children}</Text>;
        },
        tabBarOptions: {
          activeBackgroundColor: '#0A6EAC',
          showIcon: true,
          style: {height: 65},
          labelStyle: {fontSize: 18, paddingBottom: 5},
          activeTintColor: '#F8F8F8', // active icon color
          inactiveTintColor: '#666666', // inactive icon color
        },
        tabBarIcon: props => {
          const {tintColor} = props;
          return <ProfileIcon width={50} height={20} fill={tintColor} />;
        },
      },
    },
  },
  {
    initialRouteName: 'Patients',
  },
);

const AppStack = createStackNavigator(
  {
    ConnectDevice: {
      screen: ConnectDevice,
      navigationOptions: {
        headerTitle: 'Add Device',
        gesturesEnabled: false,
      },
    },
    PatientsDetails: {
      screen: PatientsDetails,
      navigationOptions: {
        headerTitle: 'Patient Details',
        gesturesEnabled: false,
      },
    },
    Filter: {
      screen: Filter,
      navigationOptions: {headerTitle: 'Filters', gesturesEnabled: false},
    },
    Tabs: {
      screen: TabNavigator,
      navigationOptions: ({navigation, navigationOptions}) => {
        const {routes, index} = navigation.state;
        return {
          headerTitle: routes[index].routeName,
          tabBarOptions: {
            activeBackgroundColor: '#0A6EAC',
          },
        };
      },
    },
  },
  {
    initialRouteName: 'ConnectDevice',
    headerMode: 'float',
    gesturesEnabled: false,
  },
);

export default AppStack;
