import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Card, Avatar, Button} from 'react-native-elements';
import PhoneIcon from 'react-native-vector-icons/Feather';
import MailIcon from 'react-native-vector-icons/Octicons';
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons';
export default class ProfileView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={{
            width: '100%',
            // margin: 8,
            padding: 8,
            height: 550,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                top: -80,
              }}>
              <Avatar
                rounded
                size="xlarge"
                overlayContainerStyle={{backgroundColor: '#454DC9'}}
                // avatarStyle={{
                //   borderWidth: 5,
                //   borderColor: '#454DC9',
                //   borderStyle: 'solid',
                // }}
                source={require('../../../assets/man.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 100,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 32, marginBottom: 16}}>
                    Omer Quadri
                  </Text>
                  <Text
                    style={{
                      fontSize: 32,
                      marginBottom: 16,
                      paddingLeft: 25,
                      color: '#E74292',
                    }}>
                    M, 22
                  </Text>
                </View>
                <View
                  style={{
                    width: 300,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MailIcon name="mail" size={24} />
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'gray',
                      marginLeft: 15,
                    }}>
                    omerquadri@gmail.com
                  </Text>
                </View>
                <View
                  style={{
                    width: 300,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <PhoneIcon name="phone" size={24} />
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'gray',
                      marginLeft: 15,
                    }}>
                    +1021365456546
                  </Text>
                </View>
                <View
                  style={{
                    paddingLeft: 8,
                    width: 300,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <LocationIcon name="location-pin" size={24} />
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'gray',
                      marginLeft: 15,
                    }}>
                    9-7-77/6, Wall St. Ontario
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 240,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Button
                  buttonStyle={{
                    backgroundColor: '#F24405',
                    width: 300,
                    height: 55,
                    borderRadius: 4,
                    marginBottom: 70,
                  }}
                  title="EDIT PROFILE"
                  titleStyle={{
                    textAlign: 'center',
                    margin: 10,
                    fontSize: 24,
                    alignItems: 'center',
                  }}
                />
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
