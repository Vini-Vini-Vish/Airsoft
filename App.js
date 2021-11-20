import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Pagina from './src/inicio/pagina';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/autenticacao/user';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Pagina/> */}
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,             
  },
  
});
