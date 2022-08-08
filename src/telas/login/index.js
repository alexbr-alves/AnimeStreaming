import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, onChangeText } from "react-native";
import Topo from "../../componentes/topo";

import styles from './styles'

export default function LoginScreen(){
    const navigation = useNavigation();
    return(
        <View>
            <Topo/>
        <View />

      
        <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999" />
        </View>

        <View style={styles.container2}>
            <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            autoCapitalize="none"/>
      </View>
        <View>
        <TouchableOpacity
            
            onPress={() =>{
                navigation.navigate('HomeScreen')
            }}>
            
            <Text style={styles.botao}>Entrar</Text>
            </TouchableOpacity>
        </View>

        </View>
    )
} 