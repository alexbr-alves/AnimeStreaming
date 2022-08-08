import { useRoute } from "@react-navigation/native";
import React, {useEffect, useState, useContext} from "react";
import { View, Text, ImageBackground,TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../context/GlobalContext";

import styles from './styles';
import IconPlay from 'react-native-vector-icons/AntDesign';
import IconFav from 'react-native-vector-icons/AntDesign';
import Iconback from 'react-native-vector-icons/Ionicons';
import Loading from "../loading";
import Favoritos from "../favoritos/index";





export default function FilmeScreen({navigation: {goBack}}){
  const {viuItem} = useContext(GlobalContext);

    const navigation = useNavigation();
    const route = useRoute();
    const [tempo, setTempo] = useState(false);
    const [favorito , setFavorito] = useState(0);
    

    const noFav = <IconFav 
    style={styles.iconFav} 
    name='hearto' size={35} 
    color='white'/>

    const yesFav = <IconFav 
    style={styles.iconFav} 
    name='heart' size={35} 
    color='red'/>

  

  useEffect(() => {
    setTimeout(() => {
      setTempo(true)
    }, 1000);
  }, []);




    return(
        <>
        {
            tempo ?
            <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() =>
                goBack()
            }>
            <Iconback style={styles.iconBack} name="arrow-back-circle-outline" size={35} color='white'/>
            </TouchableOpacity>
            <ImageBackground style={styles.banner} source={{uri: route.params.banner}}/>
            <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.title}>{route.params.title}</Text>
                <TouchableOpacity onPress={() => {viuItem(route.params.title, route.params.image, route.params.id)
                  ,setFavorito(favorito + 1)}}>
                {favorito%2 === 0 ? 
                noFav  : 
                  yesFav
                }
                </TouchableOpacity>
            </View>
            <Text style={styles.descricao}>{route.params.descricao}</Text>
            <Text style={styles.outrasDescricoes}>{route.params.tempo} minutos</Text>
            <Text style={styles.outrasDescricoes}>Diretor: {route.params.diretor}</Text>
            <Text style={styles.outrasDescricoes}>Produdora: {route.params.produtora}</Text>
            <Text style={styles.outrasDescricoes}>Ano de lancamento: {route.params.data_lancamento}</Text>
            <TouchableOpacity>
            <IconPlay style={styles.iconePlay} name = "play" size={50} color='red'/>
            </TouchableOpacity>
        </ScrollView>
        :
        <>
        <Loading/>
        </>
        }
        </>
        
    )
    
}
