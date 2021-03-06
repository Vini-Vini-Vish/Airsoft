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
import Mural_ITENS from './src/mural/it_pr'
import Mural_LOPR from './src/mural/lcp'
import EscolhasUsuario from './src/usuario/dadosUsuario'
import ListItem from './src/usuario/listaIntens'
import ListProt from './src/usuario/listaProtecao'
import ListLocal from './src/usuario/listaLocais'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name = "Login" component = {LoginUser} />
        <Stack.Screen name = "Menu Central" component = {PaginaPrincipal} />

        <Stack.Screen name = "Mural de Publicações" component = {EscolhasMU} />
        <Stack.Screen name = "Mural de Armas" component = {Mural_ARMU} />
        <Stack.Screen name = "Mural de Itens de Proteção" component = {Mural_ITENS} />
        <Stack.Screen name = "Mural de Locações" component = {Mural_LOPR} />

        <Stack.Screen name = "Lista de Cadastros" component = {EscolhasCA} />
        <Stack.Screen name = "Cadastro de Armas e Itens" component = {ItensCad} />
        <Stack.Screen name = "Cadastro de Itens de Proteção" component = {ProteCad} />
        <Stack.Screen name = "Cadastro de locais" component = {LocalCad} />
        <Stack.Screen name = "Cadastrar Novo Usuario" component = {userCad} />        

        <Stack.Screen name = "Dados de Usuario" component = {EscolhasUsuario} /> 
        <Stack.Screen name = "Pefil do Usuario" component = {perfilAlt} /> 
        <Stack.Screen name = "Lista de Armas Cadastradas" component = {ListItem} /> 
        <Stack.Screen name = "Lista de Itens de Proteção Cadastrados" component = {ListProt} /> 
        <Stack.Screen name = "Lista de Locais Cadastrados" component = {ListLocal} />        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

