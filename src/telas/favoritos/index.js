import React, { useContext} from "react";
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GlobalContext } from "../../context/GlobalContext";
import styles from './styles'

export default function Favoritos(){
    const navigation = useNavigation();
    const route = useRoute();
    const {favs} = useContext(GlobalContext);
    const {ultimosVistos} = useContext(GlobalContext);

  


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo__principal}>Filmes Favoritos</Text>
        <FlatList
        data={favs}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container} 
         >  
            <View style={styles.card}>
              <Image style={styles.imagem} source={{uri: item.imagem}}/>
              <Text style={styles.titulo}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}/>
        </SafeAreaView>
    )
        
        
       
    
}