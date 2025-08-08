import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

import { Text, View } from 'react-native'

const PostAction = ({ iconName,label,color }) => {
    return (
    <View style={{ flexDirection:'row', alignItems:"center" }}> 
        <AntDesign name={iconName} size={24} color={color} />
        <Text>{label}</Text>
    </View>
    )


}

export default PostAction
