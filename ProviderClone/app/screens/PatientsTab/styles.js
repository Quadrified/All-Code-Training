import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  controlsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  flotingButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  flotingButton: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: '#F24405',
    padding: 12,
    borderWidth: 0,
  },
  patientListContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: 15,
  },
  patientListFilterContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    height: '8%',
    marginBottom: 20,
  },
  patientList: {
    width: '100%',
    height: '94%',
  },
  searchBox: {
    width: '91%',
    paddingLeft: 0,
    marginRight: '1%',
    backgroundColor: '#fff',
    height: 56,
  },
  filterIcon: {
    width: '8%',
    paddingRight: 0,
    backgroundColor: '#fff',
    height: '50%'
  },
  patientListTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: '#0A6EAC',
  },
  patientName: {
    fontSize: 18,
    marginBottom: 8,
    color: '#0A6EAC',
  },
  patientIds: {
    fontSize: 14,
  },
});

export default styles;
