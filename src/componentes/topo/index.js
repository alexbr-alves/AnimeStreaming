import React from "react";
import { View, Text, Image } from "react-native";

import styles from "../../componentes/topo/styles";
import topo from '../../../assets/topo.png';

export default function Topo() {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={topo}></Image>
            <Text style={styles.titulo}>ANIME STREAMING</Text>
        </View>
    )
}