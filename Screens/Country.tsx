import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MyButton from '../Components/MyButton';
import {getCode, getName} from 'country-list';


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
        if (json.totalResultsCount===0)
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
    <View style={styles.container}>
      <ActivityIndicator color='#2471A3' size='large' />
    </View>)
  }
    
  const renderItem: ListRenderItem<ICity> = ({item}) => (
    <MyButton key={item.name} onPress={()=>navigation.navigate('City', {city: item.name, population: item.population})} text={item.name}></MyButton>
  )

  return (
    <View style={styles.container}>
      {error ?
        <View> 
          <Text style={{color:'#fff'}}> No search for countries are matching your search term: {route.params.country}. Make sure to use the ISO country name. </Text>
        </View>
        :
        <View>          
          <Text style={styles.title}> {route.params.country} </Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item)=>item.name}
            style={{padding: 10, marginBottom:100}}
          />  
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
  },
  title: {
    fontWeight: "bold",
    fontSize: 60,
    
    textAlign: 'center',
    color: '#fff',
  }
});