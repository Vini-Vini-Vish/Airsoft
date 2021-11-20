import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MuralCadastros ({navigation }) {
    return (
        <View style = {styles.boxFora}>       

            <View style = {styles.container}>

                <Text style = {styles.boxTitle}>ESCOLHA A OPÇÃO DESEJADA:</Text>

                <View style = {styles.textCorpo}>

                    <Text style = {styles.textComunm}>Cadastro de Itens, sendo: Armas, Munição ou Itens de Proteção.</Text>
                    <Button  
                        title = 'Cadastro de Itens'
                        //onPress = {() => navigation.navigate('')}
                    ></Button>

                    <Text style = {styles.textComunm}>Cadastro de Locais, sendo: Campo Customizável, Campo Pronto.</Text>
                    <Button 
                        title = 'Cadastro de local'
                        //onPress = {() => navigation.navigate('')}
                    ></Button>                 
                    
                </View>  
            </View>                               
      </View>
    )
}

const Stack = createNativeStackNavigator();

export default function MuralCadastro() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
  
            <Stack.Screen name = "Escolher" component = {MuralCadastros} />
  
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