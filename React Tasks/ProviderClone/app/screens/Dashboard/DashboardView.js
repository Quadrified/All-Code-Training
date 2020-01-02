import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar, Card, Tooltip} from 'react-native-elements';
import {ProgressCircle} from 'react-native-svg-charts';
import ProgressCircle2 from 'react-native-progress-circle';
import Chart from '../../components/charts';
import styles from './styles';

export default class DashboardView extends Component {
  renderDevicesCard() {
    const timeLineNavOptions = [
      {
        title: 'Day',
        value: 'day',
      },
      {
        title: 'Week',
        value: 'week',
      },
      {
        title: 'Month',
        value: 'month',
      },
    ];

    const leftNavOpions = {
      onPrevClick: () => {},
      onNextClick: () => {},
    };

    return (
      <View
        style={{
          backgroundColor: '#fff',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '15%',
            borderColor: '#DAE0E2',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 1,
              textAlign: 'left',
              alignContent: 'flex-start',
              alignItems: 'flex-start',
              //   justifyContent: 'center',
              marginLeft: 16,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#0A79DF',
                fontWeight: '300',
                marginTop: 10,
              }}>
              Devices
            </Text>
          </View>
          <View
            style={{
              textAlign: 'right',
              flexDirection: 'row',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: 18,
              marginRight: 16,
            }}>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#000', padding: 5}}>Day</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#0A79DF', padding: 5}}>
                Month
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#000', padding: 5}}>
                Week
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            borderColor: '#DAE0E2',
            borderRightWidth: 1.5,
            width: '50%',
            height: '50%',
            marginTop: 100,
            paddingTop: 50,
            marginLeft: 50,
          }}>
          <ProgressCircle
            style={{height: 250}}
            progress={0.7}
            borderWidth = {15}
            progressColor={'#0077FF'}
            startAngle={-Math.PI * 0.6}
            endAngle={Math.PI * 0.6}
          />
        </View>
      </View>
    );
  }

  renderWorkingConditionCard() {
    return (
      <Card
        containerStyle={{
          backgroundColor: '#0077FF',
          height: '47%',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <View
          style={{
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 65,
              color: '#fff',
              margin: 20,
            }}>
            121
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
            }}>
            Working condition
          </Text>
        </View>
      </Card>
    );
  }
  renderNonWorkingConditionCard() {
    return (
      <Card
        containerStyle={{
          backgroundColor: '#F24405',
          height: '47%',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <View
          style={{
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 65,
              color: '#fff',
              margin: 20,
            }}>
            16
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              textAlign: 'justify',
            }}>
            Non-working condition
          </Text>
        </View>
      </Card>
    );
  }
  renderPatientsCard() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '15%',
            borderColor: '#DAE0E2',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 1,
              textAlign: 'left',
              alignContent: 'flex-start',
              alignItems: 'flex-start',
              //   justifyContent: 'center',
              marginLeft: 16,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#0A79DF',
                fontWeight: '300',
                marginTop: 10,
              }}>
              Patients
            </Text>
          </View>
          <View
            style={{
              textAlign: 'right',
              flexDirection: 'row',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: 18,
              marginRight: 16,
            }}>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#000', padding: 5}}>Day</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#0A79DF', padding: 5}}>
                Month
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: '#000', padding: 5}}>
                Week
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            borderColor: '#DAE0E2',
            borderRightWidth: 1.5,
            width: '50%',
            height: '70%',
            paddingTop: 50,
            marginBottom: 200,
            marginLeft: 100,
            marginTop: 30,
          }}>
          <View
            style={{
              alignContent: 'flex-start',
              justifyContent: 'flex-start',
              width: '50%',
              height: '60%',
              marginBottom: 100,
              marginLeft: 50,
            }}>
            <ProgressCircle2
              percent={47.5}
              radius={120}
              borderWidth={22}
              color="#EA7773"
              shadowColor="#DAE0E2"
              bgColor="#fff">
              <ProgressCircle2
                percent={35}
                radius={60}
                borderWidth={21}
                color="#26ae60"
                shadowColor="#DAE0E2"
                bgColor="#fff"></ProgressCircle2>
            </ProgressCircle2>
            {/* <Tooltip popover={<Text>Inactive 47.90% </Text>}>
              <Text>Inactive 47.90%</Text>
            </Tooltip> */}
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            height: '90%',
            marginTop: 8,
            flexDirection: 'column',
            borderRadius: 20,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: '72%', marginLeft: 5, marginTop: 15}}>
              {this.renderDevicesCard()}
            </View>
            <View
              style={{flexDirection: 'column', width: '30%', height: '100%'}}>
              {this.renderWorkingConditionCard()}
              {this.renderNonWorkingConditionCard()}
            </View>
          </View>
          <View style={{flex: 1, marginTop: 20, marginLeft: 5, width: '100%'}}>
            {this.renderPatientsCard()}
          </View>
        </View>
      </View>
    );
  }
}
