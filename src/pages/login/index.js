import React, { Component } from 'react'
import { Text, View, TouchableOpacity as TO, TextInput } from 'react-native'
import { connect } from "react-redux";
import { login } from "../../store/actions/user";
import styles from './style'

class Login extends Component {
  state =  {
    name: 'Ryan Mata',
    email: '',
    password: '',
  }

  login = () => {
    this.props.onLogin({...this.state})
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Email' style={styles.Input}
         value={this.state.email} 
         onChangeText={email=> this.setState({email})}
        />
        <TextInput placeholder='Senha' secureTextEntry={true}
            style={styles.Input} value={this.state.password} 
            onChangeText={password => this.setState({password})}
        />
        <TO onPress={this.login} style={styles.buttom}>
            <Text style={styles.buttomText}>Login</Text>
        </TO>
        <TO onPress={() => {this.props.navigation.navigate('Register')}} style={styles.buttom}>
            <Text style={styles.buttomText}>Criar uma nova conta?</Text>
        </TO>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(Login)