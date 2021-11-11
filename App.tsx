import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'
import { RootStackParamList } from './Types/RootStackParamList';
import Country from './Screens/Country';
import City from './Screens/City';
import Search from './Screens/Search';


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
          name="Search"
          component={Search}
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


