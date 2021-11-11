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
      <RootStack.Navigator
        initialRouteName="Home"
      >
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="SearchByCountry"
          component={SearchByCountry}
          options={{ title: 'CityPop' }}
        />
        <RootStack.Screen
          name="SearchByCity"
          component={SearchByCity}
          options={{ title: 'CityPop' }}
        />
        <RootStack.Screen
          name="Country"
          component={Country}
          options={{ title: 'CityPop' }}
        />
        <RootStack.Screen
          name="City"
          component={City}
          options={{ title: 'CityPop' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


