import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../style';

export default function EscolhasUsuario ({navigation }) {
    return (
        <View style = {styles.boxFora}>       

            <View style = {styles.container}>

                <Text style = {styles.boxTitleBase}>ESCOLHA A OPÇÃO DESEJADA:</Text>

                <View style = {styles.textCorpo}>
                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button  
                        title = 'Perfil'
                        onPress = {() => navigation.navigate('alterarUser')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button 
                        title = 'Lista de Armas Cadastradas'
                        onPress = {() => navigation.navigate('Lista de Armas Cadastradas')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button 
                        title = 'Lista de itens de Proteção Cadastrados'
                        onPress = {() => navigation.navigate('Lista de Itens de Proteção Cadastrados')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button 
                          title = 'Lista de Locais Cadastrados'
                          onPress = {() => navigation.navigate('Lista de Locais Cadastrados')}
                      ></Button> 
                    </View>
                  </View> 

                </View>  
            </View>                               
      </View>
    )
}
