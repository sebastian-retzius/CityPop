import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'
import SearchByCountry from './Screens/SearchByCountry';
import { RootStackParamList } from './Types/RootStackParamList';
import SearchByCity from './Screens/SearchByCity';
import Country from './Screens/Country';
import City from './Screens/City';


const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
        />
        <RootStack.Screen
          name="SearchByCountry"
          component={SearchByCountry}
        />
        <RootStack.Screen
          name="SearchByCity"
          component={SearchByCity}
        />
        <RootStack.Screen
          name="Country"
          component={Country}
        />
        <RootStack.Screen
          name="City"
          component={City}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


