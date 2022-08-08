import React from "react";
import { View, Text} from "react-native";
import styles from "./styles";
import LottieView from 'lottie-react-native';
import Splash from '../../../assets/splash.json'



export default function Loading(){
    return(
        <View style={styles.container}>
            <LottieView 
                source={Splash}
                duration={3000}
                loop={false}
                autoPlay={true} />
        </View>
    )
}