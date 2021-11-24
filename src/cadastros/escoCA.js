import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../style';

export default function EscolhasCA ({navigation }) {
    return (
        <View style = {styles.boxFora}>               

            <View style = {styles.container}>

                <Text style = {styles.boxTitleBase}>ESCOLHA A OPÇÃO DESEJADA:</Text>

                <View style = {styles.textCorpo}>
                  <View style = {styles.boxTextComun}>
                    <Text style = {styles.textComunm}>Cadastro de Itens:</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button  
                          title = 'Cadastro de Itens'
                          onPress = {() => navigation.navigate('CadastrarIT')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>
                    <Text style = {styles.textComunm}>Cadastro de Locais:</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button 
                          title = 'Cadastro de local'
                          onPress = {() => navigation.navigate('CadastrarLo')}
                      ></Button>  
                    </View>               
                  </View>

                </View>  
            </View>                               
      </View>
    )
}
