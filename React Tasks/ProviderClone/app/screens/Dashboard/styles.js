import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: '#f9f9fb',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  providerDashboard: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    borderRadius: 0,
    padding: 8,
  },
  cardContainer: {
    padding: 0,
    borderColor: '#D8D8D8',
    borderRadius: 0,
  },
  cardTitle: {
    textAlign: 'left',
    color: '#0A6EAC',
    fontWeight: '500',
    paddingTop: 10,
    paddingLeft: 10,
  },
  deviceCard: {
    width: '70%',
  },
  deviceInfoCard: {
    flexDirection: 'column',
    width: '30%',
  },
});

export default styles;
