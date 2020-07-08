import React, { Component } from 'react'
import { Text, View, TouchableOpacity as TO ,TextInput } from 'react-native'
import styles from './style'

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    passoword: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Nome' style={styles.Input} autoFocus={true}
          value={this.state.name} onChangeText={name => this.setState({name})}
        />
         <TextInput placeholder='Email' keyboardType='email-address'
          style={styles.Input} value={this.state.email} 
          onChangeText={email=> this.setState({email})}
        />
        <TextInput placeholder='Senha' secureTextEntry={true}
            style={styles.Input} value={this.state.password} 
            onChangeText={password => this.setState({password})}
        />
        <TO onPress={() => {}} style={styles.buttom}>
            <Text style={styles.buttomText}>Salvar</Text>
        </TO>
      </View>
    )
  }
}
