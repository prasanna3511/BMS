import { View, Text ,Image , Pressable } from 'react-native'
import React from 'react'
import profile from '../../Images/profile.png'
// import {  } from 'react-native-elements'

export default function Temp1({navigation}) {
    console.log('this is tab 2')
    const handlelogout=()=>{
      console.log('logout')
      navigation.navigate('login')

    }
  return (
    <View style={{display:'flex', justifyContent:'space-around', width:'100%' , height:'100%', alignItems:'center'}} >
      <View style={{width:'100%' , height:'50%' , display:'flex' , justifyContent:'space-around', alignItems:'center'}} >

      <Image source={profile} style={{height:100 ,width:100}}/>
      <Text style={{color:'black'}} >Temp1</Text>
      </View>

    <Pressable style={{width:170, height:60, borderRadius:10, display:'flex' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#007993'}} onPress={handlelogout} >
<Text style={{color:'white' , fontWeight:600 ,fontSize:16}} >Logout</Text>
    </Pressable>

    </View>
  )
}