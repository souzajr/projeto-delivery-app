import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 5,
  },
  productBox: {
    borderTopWidth: 1,
    borderColor: 'rgba(112, 112, 112, .3)',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  innerProductBox: {
    flex: 2,
  },
  productBoxImage: {
    flex: 1,
    borderRadius: 4,
  },
  productTitle: {
    fontWeight: 'bold',
    color: '#484848',
    fontSize: 15,
  },
  productBoxDescription: {
    color: '#777',
  },
  priceArea: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxPrice: {
    marginRight: 5,
    color: '#369C11',
    fontWeight: 'bold',
    fontSize: 15,
  },
  boxPriceDiscount: {
    color: '#777',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
});

export default styles;
