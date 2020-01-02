import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import styles from './styles';
import {Avatar, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from '../../../assets/Icons/icon - search.svg';
class PatientsTabView extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   patientSearchString: '',
//     //   patientSearchResults: [],
//     //   patients: [],
//     // };
//   }

  renderPatientsList() {
    return (
      <View style={styles.patientListContainer}>
        <View style={styles.patientListFilterContainer}>
          <View style={styles.searchBox}>
            <Input
              leftIcon={<SearchIcon />}
              placeholder="Search by id, name"
              shake={true}
              errorStyle={{color: 'red'}}
              errorMessage=""
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              inputStyle={{
                backgroundColor: '#fff',
                padding: 10,
                color: '#000',
                height: 56,
              }}
            />
          </View>
          <View style={styles.filterIcon}>
            <Button
              buttonStyle={{
                backgroundColor: '#fff',
              }}
              icon={<Icon name="sliders" size={38} color="#0A6EAC" />}
              onPress={() => {
                this.props.navigation.navigate('Filter');
              }}
            />
          </View>
        </View>

        {/* // List starts */}
        <View style={styles.patientList}>
          <Text style={styles.patientListTitle}>121 Patients found</Text>
          <FlatList
            // data={patientSearchResults}
            data="John Doe 231564"
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '49%',
                    height: 70,
                    paddingLeft: 15,
                    paddingRight: 10,
                    backgroundColor: '#fff',
                    borderBottomColor: '#e1e1e1',
                    //borderBottomWidth: index + 1 < patients.length ? 1 : 0,
                    borderBottomWidth: 0,
                    marginBottom: 15,
                    marginRight: index % 2 == 0 ? 16 : 0,
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => {
                      this.props.navigation.navigate('PatientsDetails');
                    }}>
                    <View style={{width: '20%', paddingTop: 10}}>
                      <Avatar
                        rounded
                        title="JD"
                        size="medium"
                        //icon={{name: 'person', size: 32}}
                        // containerStyle={{fontSize: 14}}
                        overlayContainerStyle={{backgroundColor: '#0A6EAC'}}
                      />
                    </View>
                    <View
                      style={{
                        width: '72%',
                        flexDirection: 'column',
                        paddingBottom: 10,
                        paddingTop: 10,
                      }}>
                      <Text style={styles.patientName}>John Doe</Text>
                      <Text style={styles.patientIds}>45456</Text>
                    </View>
                    <View style={{width: '8%', alignSelf: 'center'}}>
                      <Icon
                        name="chevron-right"
                        size={20}
                        color={'rgba(0, 0, 0, 0.5)'}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(patient, index) => index.toString()}
          />
        </View>
      </View>
    );
  }

  renderAddPatientButton() {
    return (
      <Button
        type="outline"
        buttonStyle={styles.flotingButton}
        icon={<Icon name="plus" size={42} color={'#fff'} />}
        onPress={() => {
          this.props.navigation.navigate('ConnectDevice');
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPatientsList()}
        <View style={styles.flotingButtonContainer}>
          {this.renderAddPatientButton()}
        </View>
      </View>
    );
  }
}

export default PatientsTabView;
