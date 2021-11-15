import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import MyButton from '../Components/MyButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

/**
 * Home component that displays the homescreen with buttons that lead to search page
 * 
 * @returns {Home} Home component 
 */
export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityPop</Text>
      <View>
        <MyButton
          onPress={() => navigation.navigate('Search', {type: 'city'})}
          text="SEARCH BY CITY"
        />
        <MyButton
          onPress={() => navigation.navigate('Search', {type: 'country'})}
          text="SEARCH BY COUNTRY"
        />
      </View>
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
    fontSize: 60,
    marginTop: 200,
    marginBottom: 100,
    textAlign: 'center',
    color: '#fff',
  }
});