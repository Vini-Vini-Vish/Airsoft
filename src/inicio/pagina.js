import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

export default function Pagina() {
  return (
    <View>
      <View style = {styles.boxTitle}>
        <Text style = {styles.textTitle}>Podendo alugar campos para realizar jogos fechados.</Text>
        <Text style = {styles.textTitle}>App para compra ou aluguel de intens para jogos.</Text>
      </View>           
    
        <View>
            <Text style = {styles.textSubTitle}>Escolha a opção desejada, ir para:</Text>

            <View style = {styles.textCorpo}>

              <Text style = {styles.textComunm}>O botão de Cadastros, contem as opções: Equipamentos, Campos, Usuario</Text>
              <Button  title = 'Cadastros'></Button>

              <Text style = {styles.textComunm}>O botão de Mural, contem as opções: Armas e Munição, Equipamentos de Proteção, Campos.</Text>
              <Button title = 'Mural'></Button>
              
              <Text style = {styles.textComunm}>O botão de Perfil, redireciona para a vizualização dos dados cadastrados.</Text>
              <Button title = 'Perfil'></Button>

            </View>
        </View>    
     
    </View>
  )
};

const styles = StyleSheet.create({

  boxTitle: {
    padding: 30,
    backgroundColor: '#1e90ff',    
    borderRadius: 30,   
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
