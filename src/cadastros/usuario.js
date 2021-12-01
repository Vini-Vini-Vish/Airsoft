import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity,} from 'react-native';
import styles from '../../style';



export default function userCad ({navigation }) {

    //variaveis para armazenar os dados de entrada
    const [emailCad, setemailCad] = useState(null)
    const [nomeCad, setnomeCad] = useState(null)
    const [cpf, setCPF] = useState(null)
    const [tell, setTell] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confirmSenha, setconfirmSenha] = useState(null)
    const [mensagem, setMensagem] = useState(null)
    
    async function gravarDadosUsuario(){
        if(emailCad == null || nomeCad == null || cpf == null || tell == null || senha == null || confirmSenha == null){
          //apresentar mensagem dizendo q falta dados 
          setMensagem("Campo(s) em Vazio");
        }
        else{
            if(senha == confirmSenha){        
                let response = await fetch(input = 'http://192.168.0.17:3000/inserirUsuario', init = {
                    method: 'Post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    //nao passei ID
                    body: JSON.stringify(value = {                         
                        emailCad: emailCad,
                        nomeCad: nomeCad,
                        cpf: cpf,
                        tell: tell,
                        senha: senha                    
                    })
                });

                let json = await response.json();
                if(json == 'Inclusao: ok'){
                    setMensagem("Usuario cadastrado com sucesso");
                    setemailCad(null);
                    setnomeCad(null);
                    setCPF(null);
                    setTell(null);
                    setSenha(null);
                    setconfirmSenha(null);
                }
                else{
                    setMensagem("Erro no cadastro do Usario");
                }
                setTimeout(handler = () =>{
                    setMensagem(null);
                },timeout = 5000);                
            }
            else{
                //apresentar mensagem de senha desiguais
                setMensagem("As senhas digitadas não são iguais");
            }
        }       
    }

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
                            onPress = {() => {
                                gravarDadosUsuario();
                            }}
                            //onPress = {() => navigation.navigate('Logar')}
                        >
                            <Text style = {styles.textButaoCad} >Salvar Dados Inseridos</Text>
                        </TouchableOpacity>                        
                    </View>                        
                </View>     
           </View>
       </View>
    )
}