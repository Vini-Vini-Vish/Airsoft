import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginUser ({navigation }) {
    return (
        <View style = {styles.boxFora}>       

            <View style = {styles.container}>

                <Text style = {styles.boxTitle}>REALIZE O LOGIN</Text>

                <View style = {styles.textCorpo}>

                    <Text style = {styles.textSubTitle}>Email Cadastrado</Text>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = 'nome@gmail.com'
                        keyboardType = 'numeric'
                    ></TextInput>

                    <View style = {styles.textButao}>
                        <Button  
                            title = 'Logar'
                            //onPress = {() => navigation.navigate('')}
                        ></Button>
                    </View>                   

                    <Text style = {styles.textComunm}>Cadastro de novo Usuario.</Text>
                    <View style = {styles.textButao}>
                        <Button                         
                            title = 'Cadastro de local'
                            //onPress = {() => navigation.navigate('')}
                        ></Button>  
                    </View>                                   
                    
                </View>  
            </View>                               
      </View>
    )
}

const Stack = createNativeStackNavigator();

export default function LoginUsers() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
  
            <Stack.Screen name = "Logar" component = {LoginUser} />
  
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
        color: 'white',    
      }, 
    
      textSubTitle: {      
        padding: 10,         
        backgroundColor: '#a9a9a9',           
        fontSize: 18,
        textAlign: 'center',
        paddingRight: '30%',
        fontWeight: 'bold',
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
      },

      textInput: {
        height: 40,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        padding: 10,
      },

      textButao: {
        padding: 5,
        backgroundColor: '#1e90ff',  
        textAlign: 'center',   
        lineHeight: 26,
        fontWeight: 'bold',
        fontSize: 16,   
        color: 'white',  
        marginRight: 20,
        marginLeft: 20,  
      },      
    
      textComunm: {   
        fontSize: 14,
        paddingTop: 50,  
        paddingBottom: 5,  
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'justify',    
      }, 
    
      textCorpo: {
        paddingTop: 30,
        paddingBottom: 30,
      }
 
 });