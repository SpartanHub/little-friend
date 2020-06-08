import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  },

  headerContainer: {
    alignItems: 'center',
    flex: 1
  },

  footer: {

  },

  container: {
    flex: 1,
    position: 'relative'
  },

  main: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },


  wrapper: {
    paddingHorizontal: 24
  },


  heading: {
    fontFamily: 'Assistant_800ExtraBold',
    fontSize: 40,
    lineHeight: 40,
    color: '#616161'
  },

  row: {
    justifyContent: 'center',
    flexDirection: 'row'
  },

  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#616161'
  },

  boldText: {
    fontFamily: 'Poppins_600SemiBold'
  },

  greyText: {
    color: '#ADADAD'
  },

  button: {
    backgroundColor: '#E70037',
    height: 72,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },

  boxShadow: {
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.1,
    shadowRadius: 24,

    elevation: 24,
  }
})
