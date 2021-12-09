import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import das paginas 
import PaginaPrincipal from './src/inicio/pagina';
import EscolhasMU from '../airsoft/src/mural/escoMU'
import EscolhasCA from '../airsoft/src/cadastros/escoCA';
import LoginUser from './src/autenticacao/login';
import ItensCad from '../airsoft/src/cadastros/itens'
import ProteCad from '../airsoft/src/cadastros/prote'
import LocalCad from '../airsoft/src/cadastros/local'
import userCad from '../airsoft/src/cadastros/usuario'
import perfilAlt from '../airsoft/src/usuario/perfil'
import Mural_ARMU from './src/mural/ar_mu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
       {/*  <Stack.Screen name = "Logar" component = {LoginUser} />
        <Stack.Screen name = "Pagina" component = {PaginaPrincipal} />
        <Stack.Screen name = "EscolherMU" component = {EscolhasMU} />
        <Stack.Screen name = "EscolherCA" component = {EscolhasCA} />
        <Stack.Screen name = "CadastrarIT" component = {ItensCad} />
        <Stack.Screen name = "CadastrarPR" component = {ProteCad} />
        <Stack.Screen name = "CadastrarLo" component = {LocalCad} />
        <Stack.Screen name = "CadastrarUser" component = {userCad} />
        <Stack.Screen name = "alterarUser" component = {perfilAlt} /> */}
        <Stack.Screen name = "ARMU" component = {Mural_ARMU} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

