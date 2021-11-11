import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import MySearchButton from '../Components/MyIconButton';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchByCountry'>

export default function SearchByCountry({ navigation }: Props) {
  const [country, setCountry] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search by country</Text>
      <TextInput 
      style={styles.input} 
      onChangeText={text => setCountry(text)}
      value={country}
      placeholder="Enter a country"
      />
      <MySearchButton onPress={()=> navigation.navigate('Country', {country: country})}/>
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
  button: {
    padding: 20,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    alignSelf: 'center'
  }
});