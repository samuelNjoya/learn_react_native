import React from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

export default function TestAlert() {
  const showAlert = () => {
    Alert.alert("Ça marche !");
  };

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
