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
                    <Text style = {styles.textComunm}>Cadastro de Itens, sendo: Armas, Munição ou Itens de Proteção.</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button  
                          title = 'Cadastro de Itens'
                          //onPress = {() => navigation.navigate('')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>
                    <Text style = {styles.textComunm}>Cadastro de Locais, sendo: Campo Customizável, Campo Pronto.</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button 
                          title = 'Cadastro de local'
                          //onPress = {() => navigation.navigate('')}
                      ></Button>  
                    </View>               
                  </View>

                </View>  
            </View>                               
      </View>
    )
}
