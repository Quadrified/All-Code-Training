// import React, {Component} from 'react';
// import {Text, View, Dimensions} from 'react-native';
// import {
//   ProgressCircle,
//   PieChart,
//   LineChart,
//   Grid,
//   BarChart,
// } from 'react-native-svg-charts';
// import Header from './header';
// import Legend from './legend';
// import TargetLine from './targetLine';
// import {StyleSheet} from 'react-native';
// import Colors from '../constants/Colors';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: '100%',
//     width: '100%',
//     margin: 4,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignContent: 'flex-start',
//     alignItems: 'flex-start',
//   },

//   chartContainer: {
//     flex: 1,
//     height: 250,
//     flexDirection: 'column',
//     width: '100%',
//     paddingTop: 16,
//     backgroundColor: '#fff',
//   },

//   chart: {
//     width: '70%',
//     marginTop: 16,
//   },
// });

// export default class Chart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedSlice: {
//         label: '',
//         value: 0,
//       },
//       labelWidth: 0,
//     };
//     if (props.showLegend) {
//       this.state.legendItems = this.getLegendData();
//     }
//   }

//   getLegendData() {
//     const {data} = this.props;
//     return data && data.length > 0
//       ? data.map(v => {
//           return {label: v.key, value: v.value, color: v.svg.fill};
//         })
//       : null;
//   }

//   renderProgressCircle() {
//     const {data} = this.props;
//     return (
//       <View style={{width: '70%'}}>
//         <ProgressCircle
//           style={{height: 250}}
//           progress={data}
//           progressColor={'#454DC9'}
//           strokeWidth={20}
//           cornerRadius={90}
//           startAngle={-Math.PI * 0.75}
//           endAngle={Math.PI * 0.75}
//         />
//       </View>
//     );
//   }

//   renderLineChart() {
//     const {targetValue, height} = this.props;
//     return (
//       <LineChart
//         style={{height: height}}
//         data={[24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53]}
//         svg={{stroke: '#454DC9'}}
//         contentInset={{top: 20, bottom: 20}}>
//         <Grid />
//         <TargetLine targetValue={targetValue}></TargetLine>
//       </LineChart>
//     );
//   }

//   renderBarChart() {
//     const {data, height} = this.props;
//     return (
//       <BarChart
//         style={{height: height}}
//         data={data}
//         yAccessor={({item}) => item.value}
//         svg={{stroke: '#ffffff', fill: '#454DC9'}}
//         contentInset={{top: 20, bottom: 20}}
//         {...this.props}>
//         <Grid />
//       </BarChart>
//     );
//   }

//   renderPieChart() {
//     const {data} = this.props;
//     const {selectedSlice, labelWidth} = this.state;
//     const {label, value} = selectedSlice;

//     const deviceWidth = Dimensions.get('screen').width;

//     return (
//       <View style={{width: '70%'}}>
//         <PieChart
//           style={{height: 400}}
//           outerRadius={'80%'}
//           innerRadius={'45%'}
//           data={data}
//         />
//         <Text
//           onLayout={({
//             nativeEvent: {
//               layout: {width},
//             },
//           }) => {
//             this.setState({labelWidth: width});
//           }}
//           style={{
//             position: 'relative',
//             right: deviceWidth / 2 - labelWidth / 2 - 40,
//             textAlign: 'center',
//             fontSize: 20,
//             bottom: 225,
//           }}>
//           {`${label} \n ${value}`} {/* //` */}
//         </Text>
//       </View>
//     );
//   }

//   renderChart() {
//     const {type} = this.props;
//     switch (type) {
//       case 'progressCircle':
//         return this.renderProgressCircle();
//       case 'line':
//         return this.renderLineChart();
//       case 'bar':
//         return this.renderBarChart();
//       case 'pie':
//         return this.renderPieChart();
//     }
//   }

//   getChartLayout() {
//     const {legendPosition} = this.props;
//     switch (legendPosition) {
//       case 'right':
//         return {
//           flexDirection: 'row',
//         };
//       case 'bottom':
//         return {
//           flexDirection: 'column',
//         };
//     }
//   }
//   render() {
//     const {chartContainerStyle, showLegend} = this.props;
//     const {legendItems} = this.state;
//     return (
//       <View style={styles.container}>
//         <Header {...this.props}></Header>
//         <View
//           style={[
//             styles.chartContainer,
//             this.getChartLayout(),
//             chartContainerStyle,
//           ]}>
//           {this.renderChart()}
//           {showLegend ? <Legend items={legendItems} /> : null}
//         </View>
//       </View>
//     );
//   }
// }
