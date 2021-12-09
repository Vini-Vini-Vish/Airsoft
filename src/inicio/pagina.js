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

            <Text style = {styles.textTitle}>Podendo alugar campos para realizar jogos fechados.</Text>
            <Text style = {styles.textTitle}>App para compra ou aluguel de intens para jogos.</Text>

          </View>         

          <View style = {styles.textCorpo}>

            <View style = {styles.boxTextComun}>              
              <View style = {styles.textButaoComun}>               
                <Button  
                  title = 'Cadastros'
                  onPress = {() => navigation.navigate('EscolherCA', {idUser})}
                ></Button>
              </View>
            </View>            

            <View style = {styles.boxTextComun}>                       
              <View style = {styles.textButaoComun}> 
                <Button 
                  title = 'Mural de Publicações'
                  onPress = {() => navigation.navigate('EscolherMU')}
                ></Button>
              </View>
            </View>

            <View style = {styles.boxTextComun}>              
              <View style = {styles.textButaoComun}> 
                <Button 
                  title = 'Alterar Dados de Perfil'
                  //onPress = {() => navigation.navigate('alterarUser', {email:email})}
                  onPress = {() => navigation.navigate('alterarUser')}
                ></Button>
              </View>
            </View>

          </View>
      </View>  
    </View>  
  );
}
