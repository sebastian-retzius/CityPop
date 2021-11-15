import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import MySearchButton from '../Components/MySearchButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>


/**
 * Search component that displays the search page where you can search for city or country
 *
 * @returns {Search} Search component
 */
export default function Search({ navigation, route }: Props) {
  const [input, setInput] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search by {route.params.type}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setInput(text)}
        value={input}
        placeholder={`Enter a ${route.params.type}`}
      />
      <MySearchButton onPress={route.params.type == 'country' ?
        () => { if (input){
                navigation.navigate('Country', { country: input }) 
                setInput('')
              } else {
                alert('Add a search input')
              }} :
        () => { if (input){
                navigation.navigate('City', { city: input })
                setInput('')
              } else {
                alert('Add a search input')
              }}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76D7C4',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 45,
    marginTop: 55,
    marginBottom: 110,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase'
  },
  input: {
    backgroundColor: '#fff',
    padding: 20,
    fontSize: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
});