import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a' ,
      padding: 25,
    
    },
    imagem: {
      justifyContent: 'center',
      marginTop: 50,
      left: 118,
    
    },
    eventDate: {
      color: 'grey',
      fontSize: 30

    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#262626',
      borderRadius: 8,
      color:'white',
      padding: 16,
      fontSize: 16,
      marginRight: 5

    },

    buttonText: {
      color: 'white',
      fontSize: 16
    },
    button:{
      width: 70,
      height: 56,
      borderRadius: 8,
      backgroundColor:'#1e6f9f',
      alignItems: 'center',
      justifyContent: 'center'

    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: 'grey' ,
      fontSize: 16,
      textAlign: 'center'
    }, 
    material: {
      backgroundColor: 'grey',
      fontSize: 50
    }
  
});