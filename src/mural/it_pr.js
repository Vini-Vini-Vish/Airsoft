import React, { useState } from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../style';

export default function Mural_ITENS({navigation}) {
  
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
            <Text style = {styles.boxTitleBaseMural}>Mural de Itens de Proteção</Text>     
          </View>

          <FlatList
            data = {listaItens}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) =>
              <View style = {styles.lista}>
                <Text style = {styles.textoLista}>Nome do Item: {item.nomeIt}</Text>
                <Text style = {styles.textoLista}>Descrição: {item.desIt}</Text>
                <Text style = {styles.textoLista}>Valor: {item.precoIt}</Text>               
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