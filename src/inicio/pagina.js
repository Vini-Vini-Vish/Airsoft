import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../style';

export default function PaginaPrincipal ({navigation }) {
  return (
    <View style = {styles.boxFora}>
      <View style = {styles.container}>
          
          <View style = {styles.boxTitle}>

            <Text style = {styles.textTitle}>Podendo alugar campos para realizar jogos fechados.</Text>
            <Text style = {styles.textTitle}>App para compra ou aluguel de intens para jogos.</Text>

          </View>           

          <View>

            <Text style = {styles.textSubTitle}>ESCOLHA A OPÇÃO DESEJADA:</Text>
          
          </View>

          <View style = {styles.textCorpo}>

            <View style = {styles.boxTextComun}>
              <Text style = {styles.textComunm}>O botão de Cadastros, contem as opções: Equipamentos, Campos, Usuario</Text>
              <View style = {styles.textButaoComun}>               
                <Button  
                  title = 'Cadastros'
                  onPress = {() => navigation.navigate('EscolherCA')}
                ></Button>
              </View>
            </View>            

            <View style = {styles.boxTextComun}>
              <Text style = {styles.textComunm}>O botão de Mural, contem as opções: Armas e Munição, Equipamentos de Proteção, Campos.</Text>          
              <View style = {styles.textButaoComun}> 
                <Button 
                  title = 'Mural'
                  onPress = {() => navigation.navigate('EscolherMU')}
                ></Button>
              </View>
            </View>

            <View style = {styles.boxTextComun}>
              <Text style = {styles.textComunm}>O botão de Perfil, redireciona para a vizualização dos dados cadastrados.</Text>
              <View style = {styles.textButaoComun}> 
                <Button 
                  title = 'Perfil'
                  onPress = {() => navigation.navigate('')}
                ></Button>
              </View>
            </View>

          </View>
      </View>  
    </View>  
  );
}
