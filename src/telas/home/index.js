import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


import api from '../../../src/servicos/api'
import styles from './styles'
import Loading from "../loading/index";



function filtratitulo(tituloDoFilme){
  if(tituloDoFilme.lenght < 25){
    return tituloDoFilme
  }
    return `${tituloDoFilme.substring(0,20)}...`
}



export default function Home(){
  const navigation = useNavigation();
  const [filmes, setFilmes] = useState([]);
  const [tempo, setTempo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTempo(true)
    }, 3000);
  }, []);

  useEffect(() => {
    api.get("/films").then((response) => {
      setFilmes(response.data)
    })
  }, [])


  return( 
    <>
    {
      tempo ?
      
      <FlatList
        data={filmes}
        keyExtractor={({id}, index) => id}
        numColumns={'2'}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container} 
            onPress={() => 
              {navigation.navigate('Filme', {
                id: item.id,
                title: item.title, 
                banner: item.movie_banner,
                image: item.image,
                descricao: item.description,
                diretor: item.director,
                produtora: item.producer,
                data_lancamento: item.release_date,
                tempo: item.running_time,                
              }
              )}}
          >
                       

              <Image style={styles.imagem} source={{uri: item.image}}/>
              <Text style={styles.titulo}>{filtratitulo(item.title)}</Text>
          </TouchableOpacity>
        )}/>
        :

        <>
        <Loading/>
        </>
      }
    
        
    </>


  )
}