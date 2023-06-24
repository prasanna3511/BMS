import { View, Text ,StyleSheet,Pressable, Image, Switch, Modal, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import TopTabNavigator from './TopTabNavigator'

export default function Devices({route}) {
    // console.log(route.params.header)
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});


    const handledevice=()=>{
      console.log('object')
      setModalVisible(true)
      console.log("visiblity is ",modalVisible)
    }
    const handleChange = (key, value) => {
      setData({
        ...data,
        [key]: value,
      });
    };
   const handleadddeive =()=>{
    console.log(data)
    setModalVisible(!modalVisible);
   }
  return (
    <View style={{height:'100%' , width:'100%' , backgroundColor:'white'}} >
     <View style={{width:'100%', height:100 , display:'flex', flexDirection:'row', justifyContent:'space-between',  alignItems:'center',top:20 }}>
        <Text style={{color:'black' , fontSize:20 , marginHorizontal:15 }} >Devices</Text>
        <Pressable style={styles.addbtn} onPress={handledevice} >
          <Text style={{fontSize:16 , color:'white'}} >+ Add</Text>
        </Pressable>
      </View>
      <TopTabNavigator/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput placeholder=' Enter device' style={styles.txtara}
        placeholderTextColor="#8DABA9"
        onChangeText={e => handleChange('device', e)}
            value={data.device}
         />
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button]}
              onPress={()=>handleadddeive()}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    addbtn:{
      height:50,
      width:100,
      backgroundColor:'#007993',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      marginHorizontal:15
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    txtara:{
      width:'90%',
      height:50,
      borderWidth:1,
      alignSelf:'center',
      borderColor:'#1F2633',
      borderRadius:10,
      marginVertical:15,color:'black'
  },
    modalView: {
      margin: 20,
      width:'70%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:'50%',
      backgroundColor:'#007993',

    },
    textStyle:{
      color:'white',
      alignSelf:'center'
    },

})