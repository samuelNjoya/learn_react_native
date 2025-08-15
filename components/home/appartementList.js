const { View, Text, StyleSheet, FlatList,  TouchableOpacity} = require("react-native")
import houseList from '@/assets/data/data-appartement.json'
import React from 'react'
import { Alert } from 'react-native';
import { router } from 'expo-router';
import AppartementItem from './AppartementItem';


const AppartementList = () => {


    return (
        <FlatList
            data={houseList}
            horizontal
            contentContainerStyle={{ gap: 25, marginLeft: 20, paddingRight: 40, backgroundColor: "white", }}
            keyExtractor={(item) =>
                item.cover_image_url.toLowerCase.toString +
                Math.floor(Math.random() * 1000)
            }
            showsHorizontalScrollIndicator={false}

            renderItem={({ item }) => <AppartementItem item={item} />}
        />
    )
}



export default AppartementList
