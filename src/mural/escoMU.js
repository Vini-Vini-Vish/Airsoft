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
                    <Text style = {styles.textComunm}>Esta opção contem os anuncios de armas e munições, podendo ser compra de munições, e o aluguel e compra de armas.</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button  
                        title = 'Armas e Munição'
                        //onPress = {() => navigation.navigate('')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>
                    <Text style = {styles.textComunm}>Esta opção contem os anuncios de equipamentos de proteção podendo ser compra ou aluguel.</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button 
                        title = 'Itens de Proteção'
                        //onPress = {() => navigation.navigate('')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>
                    <Text style = {styles.textComunm}>A se adicionar: alugar terrenos que possam ser construidas estruturas temporarias para jogos, por tempos defenidos (dias, meses, anos).</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button 
                        title = 'Locar Campo Custom'
                        //onPress = {() => navigation.navigate('')}
                      ></Button>
                    </View>
                  </View>

                  <View style = {styles.boxTextComun}>
                    <Text style = {styles.textComunm}>Alugar campos que já possuem estruturas construidas para jogos, por tempos defenidos (dias, meses, anos).</Text>
                    <View style = {styles.textButaoComun}> 
                      <Button 
                          title = 'Locar Campo Pronto'
                          //onPress = {() => navigation.navigate('')}
                      ></Button> 
                    </View>
                  </View> 

                </View>  
            </View>                               
      </View>
    )
}
