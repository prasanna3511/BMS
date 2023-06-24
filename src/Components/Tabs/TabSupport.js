import { View, Text } from 'react-native'
import React from 'react'
import Tabs from './Tabs'

export default function TabSupport({navigation}) {
  return (
    <View style={{height:'100%' , width:'100%'}} >
      {/* <Text>TabSupport</Text> */}
      <Tabs navigation={navigation} />
      
    </View>
  )
}