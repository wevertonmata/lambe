import React, { Component } from 'react'
import { Text, View, TouchableOpacity as TO} from 'react-native'
import {Gravatar} from 'react-native-gravatar'
import { connect } from "react-redux"
import { logout } from "../../store/actions/user";
import styles from './style'

class Profile extends Component {
  logout = () => {
    this.props.onLogout()
    this.props.navigation.navigate('Login')
  }

  render() {
    const options = {email: this.props.email, secure: true}
    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar}/>
        <Text style={styles.nickname}>{this.props.name}</Text>
        <Text style={styles.email}>{this.props.email}</Text>
        <TO onPress={this.logout} style={styles.buttom}>
          <Text style={styles.buttomText}>Sair</Text>
        </TO>
      </View>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout:() => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)