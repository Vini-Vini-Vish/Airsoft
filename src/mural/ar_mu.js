import React, { useState } from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../style';

export default function Mural_ARMU({navigation}) {
  
  const [listaUsuarios, setListaUsuarios] = useState([]);

  async function Listar() {
    console.log("Lista de Usuarios");
    try {
      let response = await fetch('http://192.168.0.106:3000/ListaUsuario', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      let json = await response.json();
      console.log(json);
      setListaUsuarios(json);
    } catch (error) {console.log("Erro");}
  }
  
  return (
      <View style = {styles.boxFora}>  
        <View style = {styles.container}>
          <View>
            <Text style = {styles.boxTitleBase}>Mural de Armas e Munições</Text>     
          </View>

          <FlatList
            data = {listaUsuarios}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) =>
              <View style = {styles.lista}>
                <Text style = {styles.textoLista}>{item.emailUser}</Text>
                <Text style = {styles.texto2Lista}>{item.nomeUser}</Text>
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