import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flex: 1,
  },
  hrContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  hr: {
    borderBottomColor: 'rgba(112, 112, 112, .3)',
    borderBottomWidth: 1,
  },
  addressSection: {
  },
  addressesContainer: {
    flex: 10,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  noAddress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNoAddress: {
    color: '#777',
  },
  addressBox: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginBottom: 15,
  },
  addressSeparator: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addressBoxName: {
    flex: 6,
  },
  addressBoxConfig: {
    flex: 1,
    left: 20,
  },
  addressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CB3F3F',
  },
  addressNumber: {
    flex: 1,
    fontSize: 15,
  },
  addressComplement: {
    flex: 2,
    fontSize: 15,
  },
  editAddress: {
    fontSize: 15,
    color: '#CB3F3F',
    fontStyle: 'italic',
  },
});

export default styles;
