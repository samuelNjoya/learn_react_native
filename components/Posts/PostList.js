import React from 'react'
const { View, Text, StyleSheet, FlatList, ImageBackground } = require("react-native")
import PostListData from '@/assets/data/data-post.json'
import PostItem from './PostItem'

const PostList = () => {
    //console.log(PostList);
  return (
     <View>
         <View>
             <Text style={styles.postTitle}> Dernière publication</Text>

             {PostListData.map((post)=> (
               <PostItem postData={post}  key={post.id} />
             ))}
         </View>
    </View>
  )
}

const styles = StyleSheet.create({

postTitle: {
    color:"red",
    fontSize:40,
 }
});

export default PostList
