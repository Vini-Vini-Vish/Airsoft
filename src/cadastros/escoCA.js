import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../style';

export default function EscolhasCA ({navigation , route}) {

  const {idUser} = route.params;

    return (
        <View style = {styles.boxFora}>               

            <View style = {styles.container}>

                <Text style = {styles.boxTitleBase}>ESCOLHA A OPÇÃO DESEJADA:</Text>

                <View style = {styles.textCorpo}>
                  <View style = {styles.boxTextComun}>
                    {/* <Text style = {styles.textComunm}>Cadastro de Itens:</Text> */}
                    <View style = {styles.textButaoComun}> 
                      <Button  
                          title = 'Cadastro de Armas e Munição'
                          onPress = {() => navigation.navigate('CadastrarIT', {idUser})}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>
                    {/* <Text style = {styles.textComunm}>Cadastro de Itens:</Text> */}
                    <View style = {styles.textButaoComun}> 
                      <Button  
                          title = 'Cadastro de Itens de Proteção'
                          onPress = {() => navigation.navigate('CadastrarPR', {idUser})}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>
                    {/* <Text style = {styles.textComunm}>Cadastro de Locais:</Text> */}
                    <View style = {styles.textButaoComun}> 
                      <Button 
                          title = 'Cadastro de Locais'
                          onPress = {() => navigation.navigate('CadastrarLo')}
                      ></Button>  
                    </View>               
                  </View>

                </View>  
            </View>                               
      </View>
    )
}
