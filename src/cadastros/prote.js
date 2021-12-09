import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, } from 'react-native';
import styles from '../../style';

export default function ProteCad ({navigation, route }) {
    
    //dados usuario
    const {idUser} = route.params;

    //dados Item
    const [nome, setNome] = useState(null);
    const [descricao, setDesc] = useState(null);
    const [ano, setAno] = useState(null);
    const [adquirido, setAdq] = useState(null);
    const [nacionalidade, setANaci] = useState(null);
    const [condicao, setCondi] = useState(null);
    const [preco, setPre] = useState(null);

    async function Cadastrar() {
        if(nome == null || descricao == null || ano == null || adquirido == null || nacionalidade == null || condicao == null || preco == null){
            //erro
        }
        else{
            let inserir = await fetch('http://192.168.0.106:3000/InserirItem',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nomeIt: nome,
                    desIt: descricao,
                    anoComIt: ano,
                    desAquiIt: adquirido,
                    desNacIt: nacionalidade,
                    condIt: condicao,
                    precoIt: preco,
                    cadUserId: idUser
                })
            })
            let json = await inserir.json();
            console.log(json);
            setNome(null);
            setDesc(null);
            setAno(null);
            setAdq(null);
            setANaci(null);
            setCondi(null);
            setPre(null);
        }
    }    

    return (
       <View style = {styles.boxFora}> 

            <View style = {styles.container}>
                
               <Text style = {styles.boxTitleBase}>Digite os dados pedidos no Cadastro</Text>
               
               <View style = {styles.boxContainerCad}>
               
                    <View style = {styles.boxCad}>                              
                                        
                        <Text style = {styles.textCad}>Insira o Nome do Item</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Colete de Proteção'
                            onChangeText = {setNome}
                            value = {nome}
                        ></TextInput> 

                        <Text style = {styles.textCad}>Descrição do Item</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Material de borracha.....'
                            onChangeText = {setDesc}
                            value = {descricao} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Ano de Compra</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '2015'
                            onChangeText = {setAno}
                            value = {ano} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Foi adquirido: Novo/Semi Novo/Usado</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Usado, comprado com 2 anos de uso'
                            onChangeText = {setAdq}
                            value = {adquirido} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Importado ou Compra Nacional</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Nacional'
                            onChangeText = {setANaci}
                            value = {nacionalidade} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Condições do Item e reparos feitos</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Boas Condições de uso,Foi trocado o a espuma interna....'
                            onChangeText = {setCondi}
                            value = {condicao} 
                        ></TextInput> 

                        <Text style = {styles.textCad}>Preço</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Valor a ser anunciado.'
                            onChangeText = {setPre}
                            value = {preco} 
                        ></TextInput> 

                    </View>
                                
                    <View >                        
                        <TouchableOpacity                            
                            onPress = {() => { Cadastrar(); }}                           
                        >
                            <Text style = {styles.textButaoCad} >Cadastrar</Text>
                        </TouchableOpacity>                         
                    </View>                        
                </View>     
           </View>
       </View>
    )
}