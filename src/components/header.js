import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, Image } from 'react-native'
import icon from '../assets/imgs/icon.png'
import {Gravatar} from 'react-native-gravatar'
import {connect} from 'react-redux'

class Header extends Component {
  render() {
    const name = this.props.name || 'Anonymous'
    const gravatar = this.props.email ? 
      <Gravatar options={{email: this.props.email, secure: true}} 
      style={Styles.avatar}/> : null
    return (
      <View style={Styles.container}>
        <View style={Styles.rowContainer}>
          <Image source={icon} style={Styles.image}/>
          <Text style={Styles.title}>Lambe Lambe</Text>  
        </View>  
        <View style={Styles. userContainer}>
          <Text style={Styles.user}>{name}</Text>
          {gravatar}
        </View>      
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB', 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: '#000',
    fontFamily: 'Shelter',
    height: 30,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    fontSize: 10,
    color: '#888',
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 10
  }
})

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name
  }  
}

export default connect(mapStateToProps)(Header)