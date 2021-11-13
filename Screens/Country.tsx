import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList, ListRenderItem, Modal, Pressable } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MyButton from '../Components/MyButton';
import { getCode, getName } from 'country-list';
import ErrorModal from '../Components/ErrorModal';


type Props = NativeStackScreenProps<RootStackParamList, 'Country'>

export default function Country({ route, navigation }: Props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  interface ICity {
    name: string,
    population: number,
  }

  useEffect(() => {
    fetch(`http://api.geonames.org/searchJSON?country=${getCode(route.params.country)}&maxRows=10&orderby=population&featureClass=P&username=WeKnowIt`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.totalResultsCount === 0)
          setError(true)
        setData(json.geonames)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (loading) {
    return (
      <View style={styles.loadcontainer}>
        <ActivityIndicator color='#2471A3' size='large' />
      </View>)
  }

  const renderItem: ListRenderItem<ICity> = ({ item }) => (
    <MyButton key={item.name} onPress={() => navigation.navigate('City', { city: item.name, population: item.population })} text={item.name}></MyButton>
  )

  return (
    <View style={styles.container}>
      {error ?
        <ErrorModal
          onRequestClose={()=>{ 
            setError(false)
            navigation.navigate('Search', {type: 'country'})
           }}
          visible={error}
          searchTerm={route.params.country}
          type='country'
        />
        :
        <View style={{ flex: 1 }}>
          <Text style={styles.title}> {route.params.country} </Text>
          <View style={{ flex: 1 }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              style={{ marginTop: 20, paddingLeft: 5, paddingRight: 5 }}
            />
          </View>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76D7C4',
    justifyContent: 'flex-start',
    padding: 20,
    paddingBottom: 0,
  },
  loadcontainer: {
    flex: 1,
    backgroundColor: '#76D7C4',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 60,
    textAlign: 'center',
    color: '#fff',
  },
});