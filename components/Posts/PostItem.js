import React from 'react'
import { Alert, Button, Image, StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import PostAction from './PostAction';


const PostItem = ({ postData }) => {

const onClick = () => {
  alert("vous avec presser ce post");
};



  return (
    <View>
      <Pressable onPress={onClick}>
        <View style={styles.postStyle}>
          <Text >{postData.post}</Text>
          <View>
            {postData.postPicture && (
              <Image
                source={{ uri: postData.postPicture, }}
                style={{ width: "100%", height: 200 }}
              />
            )}
          </View>
          <View style={styles.postActionIcon}>
             <PostAction label={"25 Reactions"} iconName={"heart"} color={"yellow"}/>
             <PostAction label={"40 Commentaires"} iconName={"message1"} color={"black"} />
          </View>
        </View>
      </Pressable>

      {/* <TouchableOpacity aspectRatio: 4/3 
        onPress={() => alert("Tu as cliqué !")}
        style={{
          backgroundColor: '#007bff',
          padding: 10,
          borderRadius: 5,
          marginTop: 10
        }}>
        <Text style={{color: 'white'}}>Appuie ici</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  postStyle: {
    // backgroundColor: '#007bff',
    shadowColor: 'black',
    color: 'white',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    elevation: 12,
    shadowRadius: 10,
    marginBottom: 8,
    borderRadius: 15,
    padding: 10
  },
  postActionIcon:{
    flexDirection:"row",
    justifyContent:"space-between",
    gap:5
  }

});

export default PostItem
