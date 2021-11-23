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
                        <Text style = {styles.textCad}>Insira o Nome do Item Desejado</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Fuzil de Assalto M4A1'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Descrição do Item</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Material de ferro, com peças anexadas de outras armas.....'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Ano de Compra</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '2015'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Foi adquirido: Novo/Semi Novo/Usado</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Usado, comprado com 2 anos de uso'
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
                            onPress = {() => navigation.navigate('')}
                        ></Button>  
                    </View>                        
                </View>     
           </View>
       </View>
    )
}