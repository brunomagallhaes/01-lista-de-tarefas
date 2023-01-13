import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        
    },

    name: {
        flex: 1,
        fontSize: 16,
        color: 'white',
        marginLeft: 70
    },
    
    button:{
        width: 56,
        height: 56,
        borderRadius: 8,
        backgroundColor:'#262626',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    button2: {
        position: "absolute",
        width: 22,
        height:22,
        borderRadius:50,
        marginLeft: 16,
        alignItems: 'center' ,
        justifyContent:'center',
        borderColor: 'grey',
        borderWidth: 2,
    },
    
        
        
})