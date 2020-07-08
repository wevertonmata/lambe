import React, { Component } from 'react'
import { Text, View, TouchableOpacity as TO,TextInput,Image
  ,ScrollView,Alert } from 'react-native'
import styles from './styles'
import ImagePicker from 'react-native-image-picker'
import { connect } from "react-redux";
import { addPost } from "../../store/actions/posts";

const notUser = 'Você precisa está logado!!'

class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  }
  
  pickImage = () => {
    if(!this.props.name){
      Alert.alert('Falha',notUser)
      return
    }

    ImagePicker.showImagePicker({
      title: 'Escolha a imagem',
      maxHeight: 600,
      maxWidth: 800
    },
    res => {
      if(!res.didCancel) {
        this.setState({image: {uri: res.uri, base64: res.data}})
      }
    })
  }

  save = async () => {
    if(!this.props.name)
    {
      Alert.alert('Falha',notUser)
      return
    }

    this.props.onAddPost({
      id: Math.random(), 
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [{
        nickname: this.props.name,
        comment: this.state.comment
      }]
    })

    this.setState({image: null,comment: ''})
    this.props.navigation.navigate('Feed')
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imagecontainer}>
            <Image source={this.state.image} style={styles.image}/>
          </View>
          <TO onPress={this.pickImage} style={styles.buttom}>
            <Text style={styles.buttomText}>Escolha a foto</Text>
          </TO>
          <TextInput placeholder='Algum comentário para a foto?' 
            style={styles.Input} value={this.state.comment} 
            onChangeText={comment => this.setState({comment})}
            editable={this.props.name != null}
          />
          <TO onPress={this.save} style={styles.buttom}>
            <Text style={styles.buttomText}>Salvar</Text>
          </TO>
        </View>
      </ScrollView>
    )
  }
}


const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name
  }  
}

const mapDispatchToProps = dispatch =>{
  return {
    onAddPost: post => dispatch(addPost(post))
  }
}
  



export default connect(mapStateToProps,mapDispatchToProps)(AddPhoto)