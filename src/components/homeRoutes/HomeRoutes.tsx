import React from 'react';
import Home from '../../pages/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons"
import Biblioteca from '../../pages/biblioteca/Biblioteca';

const Tab = createBottomTabNavigator()

export default function HomeRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({ headerShown: false, tabBarIcon: ({ focused, color, size }) => {
        var iconName: string = ""

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline'
        } else if (route.name === 'Biblioteca') {
          iconName = focused 
            ? 'library'
            : 'library-outline'
        }

        return <Icon size={size} color={color} name={iconName} />;
      }})}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Biblioteca" component={Biblioteca}/>
		</Tab.Navigator>
  );
}
