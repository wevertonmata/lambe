import { StyleSheet, Platform, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width /2,
    backgroundColor: '#eee',
    marginTop: 10
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width /2,
    resizeMode: 'center'
  },
  buttom: {
    marginTop: 30, 
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttomText: {
    fontSize: 20, 
    color: "#fff",
  },
  input:{
    marginTop: 20,
    width: '90%'
  }

})