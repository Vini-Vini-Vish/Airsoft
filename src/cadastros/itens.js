import React from 'react';
import { Text, View, Button, TextInput, } from 'react-native';
import styles from '../../style';

export default function ItensCad ({navigation }) {
    return (
       <View style = {styles.boxFora}> 

            <View style = {styles.container}>
                
               <Text style = {styles.boxTitleBase}>Digite os dados pedidos no Cadastro</Text>
               
               <View style = {styles.boxContainerCad}>
               
                    <View style = {styles.boxCad}>
                        <Text style = {styles.textCad}>Email e Senha Cadastrados</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'nome@gmail.com'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Nome Completo</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Eder Lopes de Souza'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>CPF</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '78456859268'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Numero de Telefone</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '(17) 987541412'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Senha</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '15457695'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Confirmar Senha</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '15457695'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                    </View>
                                
                    <View style = {styles.textButaoCad}>
                        <Button                         
                            title = 'Salvar Dados Inseridos'
                            onPress = {() => navigation.navigate('Logar')}
                        ></Button>  
                    </View>                        
                </View>     
           </View>
       </View>
    )
}