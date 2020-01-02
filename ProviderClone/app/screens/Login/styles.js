import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logostyle: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: '#000',
  },
  loginText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#444',
  },
  loginForm: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    marginTop: 56,
    marginBottom: 16,
  },
  UIDContainerStyle: {
    borderBottomWidth: 0,
    width: '100%',
    height: 56,
    padding: 1,
    marginBottom: 15,
  },
  UIDInputStyle: {
    padding: 10,
    height: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    color: '#000',
  },
  passwordInputStyle: {
    flexDirection: 'row',
    padding: 10,
    height: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    color: '#000',
  },
  pwdContainerStyle: {
    borderBottomWidth: 0,
    width: '100%',
    height: 56,
    padding: 1,
    marginBottom: 15,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#000',
    textDecorationLine: 'underline',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: '50%',
    marginTop: -55,
  },
  rememberMeCheckboxContainer: {
    borderWidth: 0,
    backgroundColor: '#FFF',
  },
  rememberMeCheckboxText: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000',
  },
  loginButtonContainer: {
    width: '87%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  loginButtonStyle: {
    backgroundColor: '#F24405',
    width: '100%',
    alignItems: 'center',
    height: 48,
  },
});

export default styles;
