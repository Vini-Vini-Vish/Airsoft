import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function PaginaPrincipal ({navigation }) {
  return (
    <View style = {styles.boxFora}>
      <View style = {styles.container}>
          
          <View style = {styles.boxTitle}>

            <Text style = {styles.textTitle}>Podendo alugar campos para realizar jogos fechados.</Text>
            <Text style = {styles.textTitle}>App para compra ou aluguel de intens para jogos.</Text>

          </View>           

          <View>

            <Text style = {styles.textSubTitle}>ESCOLHA A OPÇÃO DESEJADA:</Text>
          
          </View>

          <View style = {styles.textCorpo}>

            <Text style = {styles.textComunm}>O botão de Cadastros, contem as opções: Equipamentos, Campos, Usuario</Text>
            <Button  
              title = 'Cadastros'
              onPress = {() => navigation.navigate('')}
            ></Button>

            <Text style = {styles.textComunm}>O botão de Mural, contem as opções: Armas e Munição, Equipamentos de Proteção, Campos.</Text>          
            <Button 
              title = 'Mural'
              onPress = {() => navigation.navigate('')}
            ></Button>

            <Text style = {styles.textComunm}>O botão de Perfil, redireciona para a vizualização dos dados cadastrados.</Text>
            <Button 
              title = 'Perfil'
              onPress = {() => navigation.navigate('')}
            ></Button>
              
          </View>
      </View>  
    </View>  
  );
}

const Stack = createNativeStackNavigator();

export default function Pagina() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "Pagina" component = {PaginaPrincipal} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
  boxFora: {
    flex: 1,  
    backgroundColor: '#000000', 
  },

  container: {
    flex: 1,           
    //color: 'black',
    borderRadius: 0,        
    marginLeft: 5, 
    marginTop: 10,
    marginRight: 5,
    marginBottom: 10,  
    backgroundColor: '#F0F8FF',     
  },
  
  boxTitle: {
    padding: 30,
    backgroundColor: '#1e90ff',       
  },

  textTitle: {    
    textAlign: 'center',   
    lineHeight: 26,
    fontWeight: 'bold',
    fontSize: 16,   
    color: 'white' 
  },

  textSubTitle: {      
    paddingTop: 40,    
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textComunm: {   
    fontSize: 14,
    paddingTop: 15,  
    paddingBottom: 30,  
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify',    
  }, 

  textCorpo: {
    paddingTop: 30,
    paddingBottom: 30,
  }

});
