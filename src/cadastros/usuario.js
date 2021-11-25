import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity,} from 'react-native';
import styles from '../../style';



export default function userCad ({navigation }) {

    const [emailCad, setemailCad] = useState(null)
    const [nomeCad, setnomeCad] = useState(null)
    const [cpf, setCPF] = useState(null)
    const [tell, setTell] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confirmSenha, setconfirmSenha] = useState(null)
    
    return (
       <View style = {styles.boxFora}> 

            <View style = {styles.container}>
                
               <Text style = {styles.boxTitleBase}>Digite os dados pedidos no Cadastro</Text>
               
               <View style = {styles.boxContainerCad}>
               
                    <View style = {styles.boxCad}>
                        <Text style = {styles.textCad}>Email</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'nome@gmail.com'
                            onChangeText = {setemailCad}
                            value = {emailCad} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Nome Completo</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Eder Lopes de Souza'
                            onChangeText = {setnomeCad}
                            value = {nomeCad} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>CPF</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '78456859268'
                            onChangeText = {setCPF}
                            value = {cpf} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Numero de Telefone</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '(17) 987541412'
                            onChangeText = {setTell}
                            value = {tell}
                        ></TextInput> 

                        <Text style = {styles.textCad}>Senha</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '15457695'
                            onChangeText = {setSenha}
                            value = {senha} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Confirmar Senha</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '15457695'
                            onChangeText = {setconfirmSenha}
                            value = {confirmSenha} 
                        ></TextInput> 

                    </View>
                                
                    <View >
                        <TouchableOpacity
                            style = {styles.butaoBack}
                            onPress = {() => navigation.navigate('Logar')}
                        >
                            <Text style = {styles.textButaoCad} >Salvar Dados Inseridos</Text>
                        </TouchableOpacity>                        
                    </View>                        
                </View>     
           </View>
       </View>
    )
}