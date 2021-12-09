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
                        onPress = {() => navigation.navigate('ARMU')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>                    
                    <View style = {styles.textButaoComun}> 
                      <Button 
                        title = 'Itens de Proteção'
                        onPress = {() => navigation.navigate('PROT')}
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
                          onPress = {() => navigation.navigate('LocalPR')}
                      ></Button> 
                    </View>
                  </View> 

                </View>  
            </View>                               
      </View>
    )
}
