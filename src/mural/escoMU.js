import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../style';

export default function EscolhasMU ({navigation }) {
    return (
        <View style = {styles.boxFora}>       

            <View style = {styles.container}>

                <Text style = {styles.boxTitleBase}>ESCOLHA A OPÇÃO DESEJADA:</Text>

                <View style = {styles.textCorpo}>
                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button  
                        title = 'Armas e Munição'
                        onPress = {() => navigation.navigate('Mural de Armas')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button 
                        title = 'Itens de Proteção'
                        onPress = {() => navigation.navigate('Mural de Itens de Proteção')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button 
                        title = 'Locar Campo Custom (EM BREVE)'
                        //onPress = {() => navigation.navigate('')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button 
                          title = 'Locar Campo Pronto'
                          onPress = {() => navigation.navigate('Mural de Locações')}
                      ></Button> 
                    </View>
                  </View> 

                </View>  
            </View>                               
      </View>
    )
}
