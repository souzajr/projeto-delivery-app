import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#CB3F3F',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 5,
  },
});

export default styles;
