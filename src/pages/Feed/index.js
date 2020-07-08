import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Header from '../../components/header'
import Post from '../../components/Post'
import styles from './style'
import { connect } from "react-redux";

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <FlatList 
          data={this.props.posts}
          keyExtractor={ item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item}/>}
        />
      </View>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts
  }  
}

export default connect(mapStateToProps)(Feed)