import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, } from 'react-native';
import styles from '../../style';

export default function perfilAlt ({navigation, route }) {

    //const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [cpf, setCPF] = useState(null);
    const [tell, setTell] = useState(null);
    const [senha, setSenha] = useState(null);
    const [confSenha, setConfSenha] = useState(null);     

    const {email} = route.params;
  
    async function ConsultarDados(){
        let response = await fetch('http://192.168.0.106:3000/ConsultarUsuario',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailUser: email                
            })            
        });
        let json = await response.json();
        setNome(json.nomeUser);
        setCPF(json.cpfUser);
        setTell(json.numTelUser);        
    };  

    return (     

       <View style = {styles.boxFora}> 

            <View style = {styles.container}>
                
               <Text style = {styles.boxTitleBase}>Digite os dados que desja alterar no Cadastro</Text>
               
               <View style = {styles.boxContainerCad}>
               
                    <View style = {styles.boxCad}>
                        <Text style = {styles.textCad}>Email</Text>
                        <TextInput 
                            style = {styles.textInput}
                            //placeholder = 'nome@gmail.com'
                            //onChangeText = {setEmail}
                            value = {email} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Nome Completo</Text>
                        <TextInput 
                            style = {styles.textInput}
                            //placeholder = 'Eder Lopes de Souza'
                            onChangeText = {setNome}
                            value={nome} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>CPF</Text>
                        <TextInput 
                            style = {styles.textInput}
                            //placeholder = '78456859268'
                            onChangeText = {setCPF}
                            value={cpf} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Numero de Telefone</Text>
                        <TextInput 
                            style = {styles.textInput}
                            //placeholder = '(17) 987541412'
                            onChangeText = {setTell}
                            value={tell}
                        ></TextInput> 

                        <Text style = {styles.textCad}>Senha</Text>
                        <TextInput 
                            style = {styles.textInput}
                            //placeholder = '15457695'
                            onChangeText = {setSenha}
                            value={senha} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Confirmar Senha</Text>
                        <TextInput 
                            style = {styles.textInput}
                            //placeholder = '15457695'
                            onChangeText = {setConfSenha}
                            value={confSenha} 
                        ></TextInput> 

                    </View>
                                
                    <View style = {styles.textButaoCad}>
                        <Button                         
                            title = 'Buscar Dados Salvos'
                            onPress = {() => {ConsultarDados();}}
                        ></Button>  
                    </View>  
                    <View style = {styles.textButaoCad}>
                        <Button                         
                            title = 'Editar Dados'
                            onPress = {() => navigation.navigate('Pagina')}
                        ></Button>  
                    </View>                       
                </View>     
           </View>
       </View>
    )
}