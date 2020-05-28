import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#777',
    borderBottomWidth: 1,
  },
  searchIcon: {
    width: '15%',
    padding: 10,
  },
  input: {
    width: '85%',
    padding: 10,
    height: 50,
    fontSize: 21,
    color: '#777',
  },
  couponSection: {
    paddingHorizontal: 15,
  },
  couponContainer: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#ececec',
    borderRadius: 4,
    backgroundColor: '#ececec',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  couponTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#CB3F3F',
    marginBottom: 15,
  },
  couponDescription: {
    color: '#777',
    marginBottom: 15,
    fontSize: 16,
  },
  couponExpiration: {
    fontStyle: 'italic',
    color: '#777',
  },
});

export default styles;
