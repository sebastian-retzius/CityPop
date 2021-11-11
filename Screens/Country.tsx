import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '../Types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'Country'>

export default function Country({route}: Props) {
  return (
    <View>
      <Text>Country: {route.params.country}</Text>
    </View>
  )
}
