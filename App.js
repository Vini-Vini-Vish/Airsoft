import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import das paginas 
import PaginaPrincipal from './src/inicio/pagina';
import EscolhasMU from '../airsoft/src/mural/escoMU'
import EscolhasCA from '../airsoft/src/cadastros/escoCA';
import LoginUser from './src/autenticacao/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "Logar" component = {LoginUser} />
        <Stack.Screen name = "Pagina" component = {PaginaPrincipal} />
        <Stack.Screen name = "EscolherMU" component = {EscolhasMU} />
        <Stack.Screen name = "EscolherCA" component = {EscolhasCA} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

