import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressContainer: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  addressBox: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 20,
    marginBottom: 15,
  },
  addressSeparator: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CB3F3F',
  },
  inputNumber: {
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 0.2,
    borderColor: '#777',
  },
  inputComplement: {
    flex: 2,
    fontSize: 18,
    marginLeft: 15,
    borderBottomWidth: 0.2,
    borderColor: '#777',
  },
  addressButton: {
    marginTop: 15,
    width: '100%',
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
    alignItems: 'center',
    backgroundColor: '#CB3F3F',
    borderColor: '#CB3F3F',
  },
  addressButtonText: {
    fontSize: 21,
    color: '#fff',
  },
});

export default styles;
