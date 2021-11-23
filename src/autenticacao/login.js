import React from 'react';
import {Text, View, Button, TextInput, } from 'react-native';
import styles from '../../style';

export default function LoginUser ({navigation }) {
    return (
        <View style = {styles.boxFora}>       

          <View style = {styles.container}>

            <Text style = {styles.boxTitleBase}>REALIZE O LOGIN</Text>

            <View style = {styles.textCorpo}>
            
              <Text style = {styles.textSubTitleLogin}>Email e Senha Cadastrados</Text>
              <TextInput 
                style = {styles.textInput}
                placeholder = 'nome@gmail.com'
                //value={text} tem que criar a variavel
              ></TextInput>   

              <TextInput 
                style = {styles.textInput}
                placeholder = '15afaf475'
                keyboardType = 'numeric'
              ></TextInput>

              <View style = {styles.textButao}>
                <Button  
                  title = 'Logar'
                  onPress = {() => navigation.navigate('Pagina')}
                ></Button>
              </View>                               

              <View style = {styles.textCorpo}>
                <Text style = {styles.textSubTitleLogin}>Cadastro de novo Usuario</Text>
                <View style = {styles.textButao}>
                  <Button                         
                  title = 'Cadastro de Usuario'
                  onPress = {() => navigation.navigate('CadastrarUser')}
                  ></Button>  
                </View>    
              </View>                                                   

            </View>  
          </View>                               
        </View>
    )
}