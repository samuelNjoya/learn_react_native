import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const UserItem = ({ user }) => {
    return (
        <TouchableOpacity style={styles.root}>
            <Text>
                <Image
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtP2dJg1mSqTYwwlSkDNeQMAdPp1g_pZPJg&s" }}
                    style={styles.image}
                />
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#7c51f3ff",
        width: 230,
        padding: 20,
        borderRadius: 15,
        gap: 5,
        margin: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius:10,
    },
});


export default UserItem
