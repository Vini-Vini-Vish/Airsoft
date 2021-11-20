import {StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  
    boxFora: {
      flex: 1,  
      backgroundColor: '#000000', 
    },
  
    container: {
      flex: 1,           
      borderRadius: 0,        
      marginLeft: 5, 
      marginTop: 10,
      marginRight: 5,
      marginBottom: 10,  
      backgroundColor: '#F0F8FF',     
    },
    
    boxTitle: {
      padding: 30,
      backgroundColor: '#1e90ff',       
    },

    boxTitleBase: {
        padding: 30,
        backgroundColor: '#1e90ff',  
        textAlign: 'center',   
        lineHeight: 26,
        fontWeight: 'bold',
        fontSize: 16,   
        color: 'white'      
    }, 
  
    textTitle: {    
      textAlign: 'center',   
      lineHeight: 26,
      fontWeight: 'bold',
      fontSize: 16,   
      color: 'white' 
    },
  
    textSubTitle: {      
      paddingTop: 40,    
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
    },

    textSubTitleLogin: {      
        padding: 10,         
        backgroundColor: '#afeeee',           
        fontSize: 18,
        textAlign: 'center',
        paddingRight: '30%',
        fontWeight: 'bold',
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
    },

    boxTextComun: {
        borderTopWidth: 2,
        marginBottom: 15,         
    },
  
    textComunm: {   
      fontSize: 14,
      paddingTop: 15,  
      paddingBottom: 5,  
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 'bold',
      textAlign: 'justify',    
    }, 

    textInput: {
        height: 40,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        padding: 10,
    },

    textButao: {
        padding: 5,
        backgroundColor: '#0000cd',  
        textAlign: 'center',   
        lineHeight: 26,
        fontWeight: 'bold',
        fontSize: 16,   
        color: 'white',  
        marginRight: 20,
        marginLeft: 20,  
        borderWidth: 1,
    },  

    textButaoComun: {
        padding: 5,
        backgroundColor: '#fffafa',  
        textAlign: 'center',   
        lineHeight: 26,
        fontWeight: 'bold',
        fontSize: 16,   
        color: 'white',  
        marginRight: 20,
        marginLeft: 20,  
        borderWidth: 1,
    },

    textComunmLogin: {   
        fontSize: 14,
        paddingTop: 50,  
        paddingBottom: 5,  
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'justify',    
    }, 
  
    textCorpo: {
      paddingTop: 30,
      paddingBottom: 30,
    }
  
  });

  export default styles; 