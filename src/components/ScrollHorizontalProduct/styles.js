import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  featureContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  featureTitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 5,
  },
  featureProductBox: {
    marginRight: 10,
  },
  featureProductBoxImage: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  innerFeatureProductBox: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: 'rgba(112, 112, 112, .3)',
    padding: 10,
  },
  featureProductTitle: {
    fontWeight: 'bold',
    color: '#484848',
    fontSize: 15,
  },
  featureProductBoxDescription: {
    color: '#777',
  },
  featurePriceArea: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureBoxPrice: {
    marginRight: 5,
    color: '#369C11',
    fontWeight: 'bold',
    fontSize: 15,
  },
  featureBoxPriceDiscount: {
    color: '#777',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
});

export default styles;
