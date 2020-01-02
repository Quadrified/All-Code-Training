import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import BTicon from '../../../assets/Icons/icon - bluetooth.svg';
import ChargeIcon from '../../../assets/Icons/icon - charge.svg';
import KneeIcon from '../../../assets/Icons/icon - knee.svg';
export default class ConnectDeviceView extends Component {
  renderIcons() {
    return (
      <View
        style={{
          height: '15%',
          width: '100%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '36%',
            width: '46%',
            backgroundColor: '#F24405',
            marginTop: 50,
            marginLeft: 20,
            borderRadius: 5,
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '70%',
              width: '12%',
              marginLeft: 15,
              marginTop: 10,
              margin: 6,
              marginBottom: 50,
              backgroundColor: '#fff',
            }}>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <BTicon size={100} />
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              textAlign: 'left',
              padding: 10,
              paddingTop: 18,
              fontWeight: '300',
            }}>
            Turn ON Bluetooth on your device.
          </Text>
        </View>
        <View
          style={{
            height: '36%',
            width: '46%',
            backgroundColor: '#F24405',
            marginTop: 50,
            marginLeft: 30,
            borderRadius: 5,
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '70%',
              width: '12%',
              marginLeft: 15,
              marginTop: 10,
              //   marginBottom: 30,
              margin: 6,
              marginBottom: 50,
              backgroundColor: '#fff',
            }}>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <ChargeIcon size={100} />
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              textAlign: 'left',
              padding: 10,
              paddingTop: 18,
              fontWeight: '300',
            }}>
            Make sure your device is fully charged.
          </Text>
        </View>
      </View>
    );
  }

  renderDevices() {
    return (
      <View>
        <View
          style={{
            width: '50%',
            height: 50,
            marginLeft: 25,
            marginTop: 40,
          }}>
          <Text style={{fontSize: 24, color: '#4968b0'}}>Discover devices</Text>
        </View>
        <View
          style={{
            height: '36%',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              height: '40%',
              width: '28%',
              backgroundColor: '#fff',
              marginTop: 50,
              marginLeft: 30,
              borderRadius: 5,
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#eee',
            }}>
            <View
              style={{
                height: '65%',
                width: '18%',
                marginLeft: 15,
                marginTop: 10,
                margin: 6,
                marginBottom: 50,
                backgroundColor: '#4968b0',
              }}>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <KneeIcon />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  paddingLeft: 10,
                  paddingTop: 15,
                  fontWeight: '200',
                }}>
                Device 01
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '40%',
              width: '28%',
              backgroundColor: '#fff',
              marginTop: 50,
              marginLeft: 30,
              borderRadius: 5,
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#eee',
            }}>
            <View
              style={{
                height: '65%',
                width: '18%',
                marginLeft: 15,
                marginTop: 10,
                margin: 6,
                marginBottom: 50,
                backgroundColor: '#4968b0',
              }}>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <KneeIcon />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  paddingLeft: 10,
                  paddingTop: 15,
                  fontWeight: '200',
                }}>
                Device 02
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '40%',
              width: '28%',
              backgroundColor: '#fff',
              marginTop: 50,
              marginLeft: 30,
              borderRadius: 5,
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#eee',
            }}>
            <View
              style={{
                height: '65%',
                width: '18%',
                marginLeft: 15,
                marginTop: 10,
                margin: 6,
                marginBottom: 50,
                backgroundColor: '#4968b0',
              }}>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <KneeIcon />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  paddingLeft: 10,
                  paddingTop: 15,
                  fontWeight: '200',
                }}>
                Device 03
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '40%',
              width: '28%',
              backgroundColor: '#fff',
              marginTop: 50,
              marginLeft: 30,
              borderRadius: 5,
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#eee',
            }}>
            <View
              style={{
                height: '65%',
                width: '18%',
                marginLeft: 15,
                marginTop: 10,
                margin: 6,
                marginBottom: 50,
                backgroundColor: '#4968b0',
              }}>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <KneeIcon />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  paddingLeft: 10,
                  paddingTop: 15,
                  fontWeight: '200',
                }}>
                Device 04
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '40%',
              width: '28%',
              backgroundColor: '#fff',
              marginTop: 50,
              marginLeft: 30,
              borderRadius: 5,
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#eee',
            }}>
            <View
              style={{
                height: '65%',
                width: '18%',
                marginLeft: 15,
                marginTop: 10,
                margin: 6,
                marginBottom: 50,
                backgroundColor: '#4968b0',
              }}>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <KneeIcon />
              </View>
            </View>

            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                    paddingLeft: 10,
                    paddingTop: 5,
                    fontWeight: '200',
                  }}>
                  Device 05
                </Text>
                <Text style={{fontSize: 15, color: '#4968b0', paddingLeft: 10}}>
                  Connecting...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderRefreshButton() {
    return (
      <View
        style={{
          height: '60%',
          width: '24%',
          backgroundColor: '#F24405',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Button
          title="REFRESH"
          buttonStyle={{
            backgroundColor: '#F24405',
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          titleStyle={{
            fontSize: 28,
            fontWeight: '400',
            textAlign: 'center',
            paddingBottom: 5,
          }}
        />
      </View>
    );
  }

  renderText() {
    return (
      <View
        style={{
          width: '50%',
          height: '20%',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '200',
            textAlign: 'center',
          }}>
          Hold on until the device has paired up!
        </Text>
      </View>
    );
  }
  renderBluetooth() {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: '100%',
          height: 300,
        }}>
        <View
          style={{
            width: 200,
            height: 350,
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../../assets/Bluetooth_2.png')}
            style={{
              flex: 1,
              width: '100%',
              height: null,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: '#eee',
          flexDirection: 'column',
        }}>
        {this.renderIcons()}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            width: '100%',
          }}>
          {this.renderDevices()}
          <View style={{flex: 1}}>{this.renderRefreshButton()}</View>
          <View style={{flex: 1}}>{this.renderText()}</View>
          <View>{this.renderBluetooth()}</View>
        </View>
      </View>
    );
  }
}
