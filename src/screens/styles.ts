import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#DCDCDC' ,
      padding: 25

    },
    eventName: {
      
        color: 'black' , 
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 48,
        textAlign: 'center'
        
    },
    eventDate: {
      color: 'grey',
      fontSize: 16
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: 'white',
      borderRadius: 8,
      color:'#1E90FF',
      padding: 16,
      fontSize: 16,
      marginRight: 12

    },

    buttonText: {
      color: 'white',
      fontSize: 16
    },
    button:{
      width: 100,
      height: 56,
      borderRadius: 8,
      backgroundColor:'#1E90FF',
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
      color: '#FFF' ,
      fontSize: 16,
      textAlign: 'center'
    }


  });