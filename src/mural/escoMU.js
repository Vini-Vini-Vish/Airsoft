import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Escolhas ({navigation }) {
    return (
        <View style = {styles.boxFora}>       

            <View style = {styles.container}>

                <Text style = {styles.boxTitle}>ESCOLHA A OPÇÃO DESEJADA:</Text>

                <View style = {styles.textCorpo}>

                    <Text style = {styles.textComunm}>Esta opção contem os anuncios de armas e munições, podendo ser compra de munições, e o aluguel e compra de armas.</Text>
                    <Button  
                        title = 'Armas e Munição'
                        //onPress = {() => navigation.navigate('')}
                    ></Button>

                    <Text style = {styles.textComunm}>Esta opção contem os anuncios de equipamentos de proteção podendo ser compra ou aluguel.</Text>
                    <Button 
                        title = 'Itens de Proteção'
                        //onPress = {() => navigation.navigate('')}
                    ></Button>
                    
                    <Text style = {styles.textComunm}>A se adicionar: alugar terrenos que possam ser construidas estruturas temporarias para jogos, por tempos defenidos (dias, meses, anos).</Text>
                    <Button 
                        title = 'Locar Campo Custom'
                        //onPress = {() => navigation.navigate('')}
                    ></Button>

                    <Text style = {styles.textComunm}>Alugar campos que já possuem estruturas construidas para jogos, por tempos defenidos (dias, meses, anos).</Text>
                    <Button 
                        title = 'Locar Campo Pronto'
                        //onPress = {() => navigation.navigate('')}
                    ></Button> 
                    
                </View>  
            </View>                               
      </View>
    )
}

const Stack = createNativeStackNavigator();

export default function Escolha() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
  
            <Stack.Screen name = "Escolher" component = {Escolhas} />
  
        </Stack.Navigator>
      </NavigationContainer>
    )
};

const styles = StyleSheet.create({

    boxFora: {
        flex: 1,  
        backgroundColor: '#000000', 
      },
    
      container: {
        flex: 1,           
        color: 'black',
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