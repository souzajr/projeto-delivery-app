import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#fff',
  },
  hrContainer: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
  hr: {
    borderBottomColor: 'rgba(112, 112, 112, .3)',
    borderBottomWidth: 1,
  },
  couponContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponBox: {
    width: '85%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  noCouponText: {
    color: '#777',
  },
});

export default styles;
