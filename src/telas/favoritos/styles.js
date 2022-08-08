import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#fff',
        flex: 1,
    },
    titulo__principal: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    card: {
        flexDirection: 'row',
        borderWidth: 1
    },
    imagem: {
        width: 75,
        height: 100,
    },
    titulo: {
        color: '#000000',
        fontWeight: 'bold', 
        fontSize: 15,
        marginLeft: 10
    }
})
