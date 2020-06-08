import { StyleSheet } from 'react-native';
import theme from '../../styles/theme'


export default StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    backgroundColor: '#FFF',
    borderRadius: 16
  },

  searchInput: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    color: '#424242',
  },

  searchIcon: {
    padding: 16
  },

  locationText: {
    ...theme.text,
    ...theme.boldText,
    flex: 1,
    fontSize: 14
  },

  categoryCard: {
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,

    height: 64,
    width: 64,
    borderRadius: 16,
    marginBottom: 8,

    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  categoryActive: {
    backgroundColor: '#E70037'
  },

  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginRight: 24
  },

  categoryImage: {
    width: 32,
    height: 32,
    color: '#000'
  },

  categoryText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: '#ADADAD'
  },


  card: {
    ...theme.boxShadow,
    backgroundColor: '#fff',
    borderRadius: 24,
    flexDirection: 'row',
    height: 'auto',
    marginVertical: 32,
  },

  cardContent: {
    flex: 1,
    paddingVertical: 16,
    paddingLeft: 16
  },

  cardImageWrapper: {
    width: '45%',
    borderRadius: 24,
    resizeMode: 'stretch',
    height: 144
  },

  cardImage: {
    height: 144 + 36,
    marginTop: -18,
    width: undefined,
    borderRadius: 24
  },

  cardTitle: {
    fontFamily: 'Assistant_800ExtraBold',
    fontSize: 24,
    color: '#616161'
  },

  cardText: {
    color: '#616161',
    marginBottom: 2
  },

  cardIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    color: '#ADADAD'
  },
})
