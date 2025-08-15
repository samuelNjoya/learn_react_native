import React from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import houseList from '@/assets/data/data-appartement.json'

export default function TestAlert() {
  const showAlert = () => {
    Alert.alert("Ça marche !");
  };

const { id } = useLocalSearchParams();
const house = houseList.find((houseItem) => houseItem.id === parseInt(id));

console.log(house);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Afficher l'alerte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: 'center', alignItems: 'center' },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});
