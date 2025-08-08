const { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity} = require("react-native")
import houseList from '@/assets/data/data-appartement.json'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'
import { Alert } from 'react-native';
import { router } from 'expo-router';


const AppartementList = () => {

    const appartementOpen = () => {
        try {
            Alert.alert("ça marche");
            router.replace("/components");
        } catch (e) {
            console.error("Errer dans App", e)
        }
    };

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

            renderItem={({ item }) => (
                <TouchableOpacity style={styles.blocImg} activeOpacity={0.8} onPress={appartementOpen}>
                    <ImageBackground
                        source={{ uri: item.cover_image_url }}
                        resizeMode="cover"
                        style={styles.maison}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ backgroundColor: "#7c51f3ff", borderRadius: 25, margin: 20, padding: 13 }}>
                                <Text style={styles.tagTex}>Nouvelle Enregistrement</Text>
                            </View>
                        </View>
                        {/* <Text>{item.name}</Text> */}
                    </ImageBackground>
                    <View>
                        <View style={styles.dflex}>
                            <Text>{item.location_city}</Text>
                            <View style={styles.d_start}>
                                <Text style={{ color: "white" }}>5.0</Text>
                                <AntDesign name="star" size={20} color="yellow" />
                            </View>
                        </View>
                        <View style={styles.dflex}>
                            <Text>${item.month_price}/mois</Text>
                            <View style={styles.d_start}>

                                <AntDesign name="user" size={20} color="yellow" />
                                <Text style={{ color: "white" }}>5 visiteurs</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    blocImg: {
        width: 320,
    },
    maison: {
        height: 200,
        borderRadius: 30,
        overflow: "hidden", //pour afficher le radius
    },
    tagTex: {
        color: "white",
        padding: "15",
        fontWeight: "700",
    },
    // style pour display flex
    dflex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 13,
    },
    d_start: {
        backgroundColor: "gray",
        flexDirection: "row",
        gap: 10,
    },

});

export default AppartementList
