import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../style';

export default function PaginaPrincipal ({navigation, route }) {

  //const {email} = route.params;
  const {idUser} = route.params;

  return (
    <View style = {styles.boxFora}>
      <View style = {styles.container}>
          
          <View style = {styles.boxTitle}>
          
            <Text style = {styles.textTitle}>App para compra ou aluguel de artigos para jogos.</Text>
            <Text style = {styles.textTitle}>Podendo alugar campos para realizar jogos fechados.</Text>

          </View>         

          <View style = {styles.textCorpo}>

            <View style = {styles.boxTextComun}>              
              <View style = {styles.textButaoComun}>               
                <Button  
                  title = 'Cadastros'
                  onPress = {() => navigation.navigate('Lista de Cadastros', {idUser})}
                ></Button>
              </View>
            </View>            

            <View style = {styles.boxTextComun}>                       
              <View style = {styles.textButaoComun}> 
                <Button 
                  title = 'Mural de Publicações'
                  onPress = {() => navigation.navigate('Mural de Publicações')}
                ></Button>
              </View>
            </View>

            <View style = {styles.boxTextComun}>              
              <View style = {styles.textButaoComun}> 
                <Button 
                  title = 'Dados do Usuario'                  
                  onPress = {() => navigation.navigate('Dados de Usuario', {idUser})}
                ></Button>
              </View>
            </View>

          </View>
      </View>  
    </View>  
  );
}
