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
        
        <Stack.Screen name = "Logar" component = {LoginUser} />
        <Stack.Screen name = "Pagina" component = {PaginaPrincipal} />

        <Stack.Screen name = "EscolherMU" component = {EscolhasMU} />
        <Stack.Screen name = "ARMU" component = {Mural_ARMU} />
        <Stack.Screen name = "PROT" component = {Mural_ITENS} />
        <Stack.Screen name = "LocalPR" component = {Mural_LOPR} />

        <Stack.Screen name = "EscolherCA" component = {EscolhasCA} />
        <Stack.Screen name = "CadastrarIT" component = {ItensCad} />
        <Stack.Screen name = "CadastrarPR" component = {ProteCad} />
        <Stack.Screen name = "CadastrarLo" component = {LocalCad} />
        <Stack.Screen name = "CadastrarUser" component = {userCad} />        

        <Stack.Screen name = "Dados de Usuario" component = {EscolhasUsuario} /> 
        <Stack.Screen name = "alterarUser" component = {perfilAlt} /> 
        <Stack.Screen name = "Lista de Armas Cadastradas" component = {ListItem} /> 
        <Stack.Screen name = "Lista de Itens de Proteção Cadastrados" component = {ListProt} /> 
        <Stack.Screen name = "Lista de Locais Cadastrados" component = {ListLocal} /> 
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

