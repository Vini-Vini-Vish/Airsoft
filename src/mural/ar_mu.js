import React, { useState } from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../style';

export default function Mural_ARMU({navigation}) {
  
  const [listaItens, setlistaItens] = useState([]);

  async function Listar() {

    console.log(setlistaItens);  
    try {
      let response = await fetch('http://192.168.0.106:3000/ListaItens', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      let json = await response.json();
      console.log(json);
      setlistaItens(json);
    } catch (error) {console.log("Erro");}
  }
  
  return (
      <View style = {styles.boxFora}>  
        <View style = {styles.container}>
          <View>
            <Text style = {styles.boxTitleBase}>Mural de Armas e Munições</Text>     
          </View>

          <FlatList
            data = {listaItens}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) =>
              <View style = {styles.lista}>
                <Text style = {styles.textoLista}>{item.nomeIt}</Text>
                <Text style = {styles.textoLista}>{item.desIt}</Text>
                <Text style = {styles.textoLista}>{item.precoIt}</Text>
              </View>
          }
          ></FlatList>

          <TouchableOpacity            
            onPress = {() => {Listar();}}
          >
            <Text style = {styles.textButaoCad}>Listar Itens</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  };