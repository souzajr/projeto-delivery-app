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
  hrContainer: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
  productTitle: {
    color: '#CB3F3F',
    fontSize: 21,
  },
  descriptionContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
  },
  productDescription: {
    color: '#777',
    fontStyle: 'italic',
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
    fontWeight: 'bold',
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
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: '#777',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  quantitySection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonSection: {
    flex: 2,
  },
  quantityText: {
    color: '#CB3F3F',
    fontWeight: 'bold',
    fontSize: 21,
  },
  addProductButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: '#CB3F3F',
    backgroundColor: '#CB3F3F',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;
