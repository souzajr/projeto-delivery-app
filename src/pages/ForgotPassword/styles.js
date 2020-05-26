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
    marginHorizontal: 20,
    textAlign: 'center',
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
    backgroundColor: '#CB3F3F',
    borderColor: '#CB3F3F',
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
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  textButton: {
    fontSize: 21,
    color: '#fff',
  },
});

export default styles;
