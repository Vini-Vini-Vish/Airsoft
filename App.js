import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Pagina from './src/inicio/pagina';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pagina/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',    
    borderRadius: 30,        
    marginLeft: 10, 
    marginTop: 80,
    marginRight: 10,
    marginBottom: 50,    
  },
  
});
