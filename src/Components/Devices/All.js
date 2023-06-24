import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import dcircle from '../../Images/dcircle.png'
import acircle from '../../Images/acircle.png'

export default function AllDevice({navigation}) {
  const alldata =[
    {
      key:1,
      img:dcircle,
      name:'Lights'
    },
    {
      key:2,
      img:acircle,
      name:'Air Conditioner'
    },
 
  ]
  const handlenext=(name)=>{
    if(name=='Air Conditioner')
    {
      navigation.navigate('aircondition')
    }
    else{
      navigation.navigate('lights')

    }
 console.log(name)
  }
  return (
    <View style={{height:'100%' , width:'100%' , backgroundColor:'white', flexWrap:'wrap',display:'flex' , flexDirection:'row'}} >
      {/* <Text style={{color:'black'}} >AllDevice</Text> */}
      {alldata.map((item , index)=>(
        <Pressable style={styles.card} onPress={()=>handlenext(item.name)}  >
        <Image source={item.img} style={{width:100 , height:100 , resizeMode:'contain',marginVertical:5}} />
        <Text style={{color:'black',fontSize:16,fontWeight:"700"}} >{item.name}</Text>

        </Pressable>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  card:{
width:'50%',
// borderWidth:1,
height:150,
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
  }
})