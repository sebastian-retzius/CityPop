import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'


type Props = {
  onPress: () => void;
}

export default function MySearchButton({ onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [{ backgroundColor: pressed ? '#2471A3' : '#1A5276', }, styles.button]}
      onPress={onPress}
    >
      <Ionicons name="search" size={40} color='#fff'/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
