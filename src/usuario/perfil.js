import React, { useState } from 'react';
import { Text, View, Button, TextInput, } from 'react-native';
import styles from '../../style';

export default function perfilAlt ({navigation, route }) {

    const {idUser} = route.params;

    //const [user, setUser] = useState(null);    
    const [emailUser, setemailUser] = useState(null);    
    const [nome, setNome] = useState(null);
    const [cpf, setCPF] = useState(null);
    const [tell, setTell] = useState(null);
    const [senha, setSenha] = useState(null);
    const [confSenha, setConfSenha] = useState(null);     
  
    async function ConsultarDados(){
        let response = await fetch('http://192.168.0.106:3000/ConsultarUsuario',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                id: idUser                                
            })            
        });
        let json = await response.json();      
        setemailUser(json.emailUser)
        setNome(json.nomeUser);
        setCPF(json.cpfUser);
        setTell(json.numTelUser); 
        setSenha(json.senhaUser);
        setConfSenha(json.confSenhaUser);              
    }; 
    
    async function AlterarDados() {
        console.log("Entrou no alterar()")

        let alterar = await fetch('http://192.168.0.106:3000/AlterarUsuario',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                id: idUser,
                emailUser: emailUser,
                nomeUser: nome,
                cpfUser: cpf,
                numTelUser: tell,
                senhaUser: senha,
                confSenhaUser: confSenha, 
            })            
        });
        let json = await alterar.json();   
        console.log(alterar); 
    };

    async function DeletarDados() {
        let response = await fetch('http://192.168.0.106:3000/ExcluirUsuario',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                id: idUser                                    
            })                        
        });      
        let json = await alterar.json();   
       
    }

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
                            onChangeText = {setemailUser}
                            value = {emailUser} 
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
                            onPress = {() => {AlterarDados();}}                           
                        ></Button>  
                    </View> 
                    <View style = {styles.textButaoCad}>
                        <Button                         
                            title = 'Excluir Dados'
                            onPress = {() => {DeletarDados();  navigation.navigate('Login');}}                          
                        ></Button>  
                    </View>                       
                </View>     
           </View>
       </View>
    )
}