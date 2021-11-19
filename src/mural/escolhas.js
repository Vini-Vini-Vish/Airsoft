import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

export default function Escolha() {
    return (
        <View>       
            
            <Text style = {styles.textSubTitle}>ESCOLHA A OPÇÃO DESEJADA:</Text>

            <View style = {styles.textCorpo}>
            
                <Text style = {styles.textComunm}>Esta opção contem os anuncios de armas e munições, podendo ser compra de munições, e o aluguel e compra de armas.</Text>
                <Button  
                    title = 'Armas e Munição'
                    //onPress = {() => navigation.navigate('')}
                >                
                </Button>

                <Text style = {styles.textComunm}>Esta opção contem os anuncios de equipamentos de proteção podendo ser compra ou aluguel.</Text>
                <Button 
                    title = 'Itens de Proteção'
                    //onPress = {() => navigation.navigate('')}
                >                    
                </Button>
                
                <Text style = {styles.textComunm}>A se adicionar: alugar terrenos que possam ser construidas estruturas temporarias para jogos, por tempos defenidos (dias, meses, anos).</Text>
                <Button 
                    title = 'Locar Campo Custom'
                    //onPress = {() => navigation.navigate('')}
                >
                </Button>

                <Text style = {styles.textComunm}>Alugar campos que já possuem estruturas construidas para jogos, por tempos defenidos (dias, meses, anos).</Text>
                <Button 
                    title = 'Locar Campo Pronto'
                    //onPress = {() => navigation.navigate('')}
                >  
                </Button> 
                
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