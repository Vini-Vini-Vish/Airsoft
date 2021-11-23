import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import das paginas 
import PaginaPrincipal from './src/inicio/pagina';
import EscolhasMU from '../airsoft/src/mural/escoMU'
import EscolhasCA from '../airsoft/src/cadastros/escoCA';
import LoginUser from './src/autenticacao/login';
import ItensCad from '../airsoft/src/cadastros/itens'
import LocalCad from '../airsoft/src/cadastros/local'
import userCad from '../airsoft/src/cadastros/usuario'
import perfilAlt from '../airsoft/src/usuario/perfil'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* <Stack.Screen name = "Logar" component = {LoginUser} />
        <Stack.Screen name = "Pagina" component = {PaginaPrincipal} />
        <Stack.Screen name = "EscolherMU" component = {EscolhasMU} />
        <Stack.Screen name = "EscolherCA" component = {EscolhasCA} /> */}
        <Stack.Screen name = "CadastrarIT" component = {ItensCad} />
        <Stack.Screen name = "CadastrarLo" component = {LocalCad} />
        <Stack.Screen name = "CadastrarUser" component = {userCad} />
        <Stack.Screen name = "alterarUser" component = {perfilAlt} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

