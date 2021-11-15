import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import ErrorModal from '../Components/ErrorModal'
import { RootStackParamList } from '../Types/RootStackParamList'
import NumberFormat from 'react-number-format';

type Props = NativeStackScreenProps<RootStackParamList, 'City'>

/**
 * City screen that displays the information about a City
 *
 * @returns {City} City Screen
 */
export default function City({ route, navigation }: Props) {
  const [population, setPopulation] = useState(route.params.population)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!population) {
      fetch(`http://api.geonames.org/searchJSON?name_equals=${(route.params.city)}&maxRows=1&featureClass=P&username=WeKnowIt`, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.totalResultsCount === 0)
            setError(true)
          if (json.geonames[0])
            setPopulation(json.geonames[0].population)
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <View style={styles.loadcontainer}>
        <ActivityIndicator color='#1A5276' size='large' />
      </View>)
  }

  return (
    <View style={styles.container}>
      {error ?
        <ErrorModal
        onRequestClose={()=>{ 
          setError(false)
          navigation.navigate('Search', {type: 'city'})
         }}
        visible={error}
        searchTerm={route.params.city}
        type='city'
      />
        :
        <View>
          <Text style={styles.title}>{route.params.city}</Text>
          <View style={styles.popview}>
            <Text style={styles.subtitle}>POPULATION</Text>
            <NumberFormat value={population} displayType='text' thousandSeparator={' '} renderText={value => <Text style={styles.poptitle}>{value}</Text>}/>
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
  popview: {
    marginTop: 100,
    padding: 20,
    backgroundColor: '#1A5276',
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
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  poptitle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
  },
});