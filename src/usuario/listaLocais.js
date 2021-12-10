import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../style';

export default function ListLocal({navigation, route}) {
    
    //id do usuario
    const {idUser} = route.params;    

    const [listaLocais, setlistaLocais] = useState([]);

    async function Listar() {        
        try {
          let response = await fetch('http://192.168.0.106:3000/ListaLocalPronto', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },                    
          });
          let json = await response.json();
          console.log(json);          
          setlistaLocais(json.filter(({cadUserId}) => cadUserId === idUser));  
          console.log(setlistaLocais);         
        } catch (error) {console.log("Erro");}        
    }    

    return (
        <View style = {styles.boxFora}>  
        <View style = {styles.container}>
          <View>
            <Text style = {styles.boxTitleBaseMural}>Seus Locais Cadastradas</Text>     
          </View>

          <FlatList
            data = {listaLocais}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) =>
              <View style = {styles.lista}>
                <Text style = {styles.textoLista}>Nome do Responsavel: {item.nomeLoc}</Text>
                <Text style = {styles.textoLista}>Cidade: {item.cidLoc}</Text>
                <Text style = {styles.textoLista}>Valor: {item.valAluLoc}</Text>               
              </View>
          }
          ></FlatList>

          <TouchableOpacity            
            onPress = {() => {Listar();}}
          >
            <Text style = {styles.textButaoCad}>Listar de  Itens</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
}