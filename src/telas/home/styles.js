import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width / 2 ;

export default StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#000000'
    },
    imagem: {
        width: windowWidth,
        height: 300,
    },
    titulo: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold', 
        fontSize: 15
    }
})