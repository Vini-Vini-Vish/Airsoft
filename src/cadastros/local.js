import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, } from 'react-native';
import styles from '../../style';

export default function LocalCad ({navigation, route }) {

    //dados usuario
    const {idUser} = route.params;

    //dados Item
    const [nome, setNome] = useState(null);
    const [descricao, setDesc] = useState(null);
    const [cid, setCidade] = useState(null);
    const [end, setEndereco] = useState(null);
    const [tell, setTelefone] = useState(null);
    const [valorD, setValorDiaria] = useState(null);   

    async function Cadastrar() {
        if(nome == null || descricao == null || cid == null || end == null || tell == null || valorD == null){
            //erro
        }
        else{
            console.log("Aki");
            let inserir = await fetch('http://192.168.0.106:3000/InserirLocal',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nomeLoc: nome,
                    desLoc: descricao,
                    cidLoc: cid,
                    endLoc: end,
                    numTelLoc: tell,
                    valAluLoc: valorD,                   
                    cadUserId: idUser
                })
            })
            let json = await inserir.json();
            console.log(json);            

            navigation.navigate('Pagina', {idUser});     

        }
    }    

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
                            onChangeText = {setNome}
                            value = {nome} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Descrição do Local</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Limpo, Plano, sem mato, metragem quadrada....'
                            onChangeText = {setDesc}
                            value = {descricao} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Cidade</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Birigui'
                            onChangeText = {setCidade}
                            value = {cid} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Endereço</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Rua Jose Alencar da Silva, 47'
                            onChangeText = {setEndereco}
                            value = {end} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Numero de Telefone</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '(17) 987541412'
                            onChangeText = {setTelefone}
                            value = {tell} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Valor da Diaria</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '500 reais a diaria'
                            onChangeText = {setValorDiaria}
                            value = {valorD} 
                        ></TextInput> 

                    </View>
                                
                    <View >                        
                        <TouchableOpacity                            
                            onPress = {() => { Cadastrar();}}                                                       
                        >
                            <Text style = {styles.textButaoCad} >Cadastrar</Text>
                        </TouchableOpacity>                         
                    </View>                        
                </View>     
           </View>
       </View>
    )
}