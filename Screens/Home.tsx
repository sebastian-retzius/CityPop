import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({navigation}: Props ) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button 
        title="Search by country"
        onPress={()=> navigation.navigate('SearchByCountry')}  
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});