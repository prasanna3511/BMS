import { View, Text ,  StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
    Image,} from 'react-native'
import React, { useState } from 'react'
import login from '../Images/login.png'

export default function Login({navigation}) {
    const [data, setData] = useState({});

  const handleChange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleLogin=()=>{
    console.log(data)
    navigation.navigate('tab')
  }
  return (
    <View style={styles.header} >
      {/* <Text>Login</Text> */}
      <View style={styles.imgheader}>
      <Image source={login} style={styles.image} /> 

      </View>
      <View>
        <Text style={styles.logintxt} >
            Login
        </Text>
        <TextInput placeholder='Username' style={styles.txtara}
        placeholderTextColor="#8DABA9"
        onChangeText={e => handleChange('username', e)}
            value={data.username}
         />
         <TextInput placeholder='Password' style={styles.txtara}
        placeholderTextColor="#8DABA9"
        onChangeText={e => handleChange('password', e)}
            value={data.password}
         />
         <Pressable style={styles.button} onPress={handleLogin} >
    <Text style={{color:'#FFFFFF' }} >Login</Text>
         </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
    image: {
        height:300,
        width:'100%',
    },
    imgheader:{
        // height:'100%',
        width:'100%',
    },
    txtara:{
        width:'80%',
        height:50,
        borderWidth:1,
        alignSelf:'center',
        borderColor:'#1F2633',
        borderRadius:10,
        marginVertical:15,color:'black'
    },
    logintxt:{
        color:'black',
        fontFamily:'Poppins',
        marginHorizontal:'12%',
        marginVertical:20,
        fontWeight:'700',
        // fontSize:'16',
        fontSize:16
    },
    button:{
        width:'30%',
        height:50,
        alignSelf: 'center',
        borderRadius:10,
        backgroundColor:'#007993',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})