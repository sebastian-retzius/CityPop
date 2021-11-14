import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import MySearchButton from '../Components/MySearchButton';
import Autocomplete from 'react-native-autocomplete-input'
import { getNames } from 'country-list'

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>

export default function Search({ navigation, route }: Props) {
  const [input, setInput] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search by {route.params.type}</Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={text => setInput(text)}
        value={input}
        placeholder={`Enter a ${route.params.type}`}
      /> */}
      <View style={styles.autocompleteContainer}>
        <Autocomplete
          inputContainerStyle={{
            borderRadius:10,
            backgroundColor: '#fff',
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          listContainerStyle={{
            borderRadius:10,
            margin: 10,
            backgroundColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          listStyle={{
            backgroundColor:'#76D7C4'
          }}
          onChangeText={text => setInput(text)}
          value={input}
          placeholder={`Enter a ${route.params.type}`}
          data={input && !getNames().includes(input) && input.length>2 ? getNames().filter(item => item.includes(input)) : []}
          flatListProps={{
            keyboardShouldPersistTaps: 'always',
            keyExtractor: (item) => item,
            renderItem: ({ item }) => (
              <Pressable onPress={() => setInput(item)}>
                <Text>{item}</Text>
              </Pressable>
            )
          }}
        />
      </View>
      <MySearchButton onPress={route.params.type == 'country' ?
        () => {
          navigation.navigate('Country', { country: input })
          setInput('')
        } :
        () => {
          navigation.navigate('City', { city: input })
          setInput('')
        }} />
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 270,
    zIndex: 1,
    padding: 5,
    elevation: 10
  },

});