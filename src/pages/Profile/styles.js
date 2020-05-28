import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#CB3F3F',
    fontSize: 21,
  },
  hrContainer: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
  hr: {
    borderBottomColor: 'rgba(112, 112, 112, .3)',
    borderBottomWidth: 1,
  },
  labelContainer: {
    marginTop: 15,
    marginBottom: -8,
    alignItems: 'flex-start',
    paddingHorizontal: '7.5%',
  },
  label: {
    fontStyle: 'italic',
    color: '#777',
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
  button: {
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
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#CB3F3F',
    borderColor: '#CB3F3F',
  },
  textButton: {
    fontSize: 21,
  },
  facebookButton: {
    alignItems: 'center',
    backgroundColor: '#3B5998',
    borderColor: '#3B5998',
  },
});

export default styles;
