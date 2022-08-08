import { StyleSheet,  } from "react-native";



export default StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        height: '100%',
    },
    banner: {
        width: '100%',
        height: 200,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold', 
        fontSize: 20,
        margin: 5
    },
    descricao: {
        color: '#fff', 
        fontSize: 15,
        margin: 5,
        fontStyle: 'italic'
    },
    outrasDescricoes: {
        color: '#fff', 
        fontSize: 17,
        margin: 5
    },
    iconFav: {
        margin: 15,
    
    },
    iconePlay: {
       margin: 15,
        alignSelf: 'flex-end',
        
    },
    iconBack: {
        paddingLeft: 10,
        paddingVertical: 10,
      
    },
    
})