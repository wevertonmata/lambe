import React, { Component } from 'react'
import { Text, View, Alert,Dimensions, StyleSheet } from 'react-native'

export default class Comments extends Component {
  render() {
    let view = null
    if(this.props.comments){
      view = this.props.comments.map((item,index) => {
        return (
          <View style={style.commentContainer} key={index}>
            <Text style={style.nickname}>{item.nickname}:</Text>
            <Text style={style.comment}> {item.comment}</Text>
          </View>
        )
      })
    }
    return (
      <View style={style.container}>
        {view}
      </View>
    )
  } 
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  commentContainer:{
    flexDirection: 'row',
    marginTop: 5
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444'
  },
  comment:{
    color: '#555'
  }
})