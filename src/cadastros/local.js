import React from 'react';
import { Text, View, Button, TextInput, } from 'react-native';
import styles from '../../style';

export default function LocalCad ({navigation }) {
    return (
       <View style = {styles.boxFora}> 

            <View style = {styles.container}>
                
               <Text style = {styles.boxTitleBase}>Digite os dados pedidos no Cadastro</Text>
               
               <View style = {styles.boxContainerCad}>
               
                    <View style = {styles.boxCad}>
                        <Text style = {styles.textCad}>Nome do Responsavel</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Eder Lopes de Souza'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Descrição do Local</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Limpo, Plano, sem mato, metragem quadrada....'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Cidade</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Birigui'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Endereço</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Rua Jose Alencar da Silva, 47'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Numero de Telefone</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '(17) 987541412'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                    </View>
                                
                    <View style = {styles.textButaoCad}>
                        <Button                         
                            title = 'Salvar Dados Inseridos'
                            onPress = {() => navigation.navigate('Pagina')}
                        ></Button>  
                    </View>                        
                </View>     
           </View>
       </View>
    )
}