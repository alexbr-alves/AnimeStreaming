import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import Favoritos from '../telas/favoritos';
import HomeRotas from './HomeRotas';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        headerTitleAlign: 'center',
        title: ' ',
        tabBarIcon: ({size, color}) => {
          let iconName;
          if(route.name ==='Home') {
            iconName = 'ios-home'}
          else if (route.name === 'Favoritos') {
            iconName = 'heart-sharp'}
          return <Ionic name={iconName} color={color} size={size} />
        }
      })}>
        <Tab.Screen name="Home" component={HomeRotas} />
        <Tab.Screen name="Favoritos" component={Favoritos}
  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}