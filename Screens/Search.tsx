import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import MySearchButton from '../Components/MySearchButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>

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
        () => navigation.navigate('Country', { country: input }) :
        () => navigation.navigate('City', { city: input })} />
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
    fontSize: 40,
    marginTop: 200,
    marginBottom: 100,
    textAlign: 'center',
    color: '#fff',
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