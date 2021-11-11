import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function SearchByCountry( {navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text>Search by country</Text>
      <Button 
        title="Home"
        onPress={()=> navigation.navigate('Home')}  
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