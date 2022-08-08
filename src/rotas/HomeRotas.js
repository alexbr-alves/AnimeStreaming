import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../telas/login/index'
import Home from '../telas/home/index';
import FilmeScreen from "../telas/filmes";
import SplashScreen from "../telas/splash";


const Stack = createNativeStackNavigator();

export default function HomeRotas() {
    return(  
            <Stack.Navigator screenOptions={{
                headerShown: false,
                statusBarColor: '#000000',
                headerTintColor: '#000000',}}>
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                
                <Stack.Screen name="HomeScreen" 
                component={Home}/>
                <Stack.Screen name="Filme" component={FilmeScreen} />
            </Stack.Navigator>
)}