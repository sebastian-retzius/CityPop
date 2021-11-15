import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'

type Props = {
  onPress: () => void;
  text: string;
}

/**
 * MyButton component that is the styled button for CityPop
 * 
 * @param {()=>void} onPress - function that happens on press event
 * @param {string} text - text to be displayed in button
 * @returns {MyButton} MyButton component
 */
export default function MyButton({ onPress, text }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [{ backgroundColor: pressed ? '#2471A3' : '#1A5276', }, styles.button]}
      onPress={onPress}
    >
      <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
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
  }
});
