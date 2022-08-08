import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import LottieView from 'lottie-react-native';
import Splash from '../../../assets/splash.json'
import { useNavigation } from "@react-navigation/native";



export default function SplashScreen(){
    const navigation = useNavigation();
    function animacaoFinalizada(){
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })

    }


    return(
        <View style={styles.container}>
            <LottieView 
                source={Splash}
                duration={3000}
                loop={false}
                autoPlay={true}
                onAnimationFinish={animacaoFinalizada}  
            />
        </View>
    )
}