import { Link } from "expo-router";
const { View, Text, StyleSheet, ScrollView, FlatList, ImageBackground, TouchableOpacity, Button } = require("react-native")
import AntDesign from '@expo/vector-icons/AntDesign';
import AppartementList from '@/components/home/AppartementList.js';
import UserList from "../../components/home/UserList";
import PostList from "@/components/Posts/PostList.js"
import Form from "@/components/Form/Form.js"
import TestAlert from "../../components/TestAlert";



const Page = () => {

  //console.log(houseList);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: '600' }}> Decouvrir </Text>

        <AntDesign name="search1" size={30} color="black" Weigth={700} />



      </View>
      <Link href={"/"}>  <Text> ceci est Home </Text> </Link>

      {/*  
              Liste de mes composantes   scrollEnabled={false}
                reutilisable
       */}
      <ScrollView showsVerticalScrollIndicator={false} >
        <View>
          <AppartementList />
          <UserList />
          <PostList />
          <Form />
          {/* <TestAlert /> */}
        </View>
      </ScrollView>
      <Text></Text>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fefefe',
    flexDirection: 'row',
  },
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
    padding: 15,
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




export default Page;