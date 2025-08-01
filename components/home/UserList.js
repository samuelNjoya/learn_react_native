import React from 'react'
import { View, Text } from 'react-native'
import { FlatList,  StyleSheet} from 'react-native'
import userList from '@/assets/data/data-users.json'
import UserItem from './UserItem'


const UserList = () => {
  return (
   <View>
     <Text>Nos meilleurs partenaires</Text>

      <FlatList
        data={userList}
        contentContainerStyle={styles.root}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> <UserItem user={item}/> }
     />
   </View>
  )
}
const styles = StyleSheet.create({
    root:{

    },
});
 //   <View></View>
export default UserList
