import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#CB3F3F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 130,
    width: 130,
  },
  bottomContainer: {
    flex: 2.5,
    backgroundColor: '#fff',
  },
  fix: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperText: {
    color: '#CB3F3F',
    fontSize: 21,
    marginBottom: 15,
    marginTop: 30,
  },
  input: {
    width: '85%',
    height: 50,
    fontSize: 21,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 4,
    color: '#777',
    padding: 10,
    marginBottom: 15,
  },
  authButton: {
    flex: 1,
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  authButtonLoading: {
    flex: 1,
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'center',
  },
  viewTextButton: {
    flex: 6,
    justifyContent: 'flex-start',
  },
  iconButton: {
    marginLeft: 5,
  },
  textButton: {
    fontSize: 21,
  },
  emailAuthButton: {
    backgroundColor: '#CB3F3F',
    borderColor: '#CB3F3F',
  },
  facebookAuthButton: {
    backgroundColor: '#3B5998',
    borderColor: '#3B5998',
  },
  googleAuthButton: {
    backgroundColor: '#fff',
    borderColor: '#777',
  },
  iconGoogleButton: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  buttonBottom: {
    marginBottom: 15,
  },
  textBottom: {
    color: '#CB3F3F',
    fontSize: 21,
  },
});

export default styles;
