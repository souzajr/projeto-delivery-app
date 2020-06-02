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
    paddingHorizontal: 10,
  },
  productTitle: {
    color: '#CB3F3F',
    fontSize: 21,
  },
  descriptionContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  productDescription: {
    color: '#777',
    fontStyle: 'italic',
  },
  productOptionsContainer: {
    paddingHorizontal: 10,
  },
  productOptionsTitleContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  productOptionsTitle: {
    color: '#CB3F3F',
    fontWeight: 'bold',
    fontSize: 17,
  },
  productOption: {
    color: '#000',
  },
  productOptionsInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hr: {
    borderBottomColor: 'rgba(112, 112, 112, .3)',
    borderBottomWidth: 1,
  },
  labelContainer: {
    marginTop: 15,
    marginBottom: -10,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#777',
  },
  input: {
    width: '95%',
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
    paddingHorizontal: 10,
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
  },
  buttonConfig: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonConfigLoading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;
