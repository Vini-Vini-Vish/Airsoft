import React, { useState } from 'react';
import {Text, View, Button, TextInput, } from 'react-native';
import styles from '../../style';

export default function LoginUser ({navigation }) {

    const [emaiLogin, setemaiLogin] = useState(null);
    const [senhaLogin, setsenhaLogin ] = useState(null);
    
    const [senha, setSenha] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    async function Validarlogin(){
      if(emaiLogin == null || senhaLogin == null){
        setMensagem("Ha campos vazios!");
      }
      else{
        let response = await fetch('http://192.168.0.106:3000/ValidarUsuario',{
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            emailUser: emaiLogin,
            //senhaUser: senhaLogin
          })
        });
        let json = await response.json();
        //console.log(json);
        if(json == 'erro'){
          setMensagem("Usuario não Encontrado")
        }
        else{
          setSenha(json.senhaUser);          
          if(senhaLogin == senha){            
            navigation.navigate('Pagina', {email:emaiLogin});
          }
          else{
            setMensagem("A senha digitada errada")
          }
        }
      }
    }

    return (
        <View style = {styles.boxFora}>       

          <View style = {styles.container}>

            <Text style = {styles.boxTitleBase}>REALIZE O LOGIN</Text>

            <View style = {styles.textCorpoLogin}>
            
              <Text style = {styles.textSubTitleLogin}>Email e Senha Cadastrados</Text>
              <TextInput 
                style = {styles.textInput}
                placeholder = 'nome@gmail.com'
                onChangeText = {setemaiLogin}
                value = {emaiLogin} 
              ></TextInput>   

              <TextInput 
                style = {styles.textInput}
                placeholder = '15afaf475'
                keyboardType = 'numeric'
                onChangeText = {setsenhaLogin}
                value = {senhaLogin}
              ></TextInput>

              <View style = {styles.textButao}>
                <Button  
                  title = 'Logar'
                  onPress = {() => { Validarlogin(); }}                                    
                ></Button>
              </View>                               

              <View style = {styles.textCorpoLogin}>
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