import { View, Text ,StyleSheet,Pressable, Image, Switch, Modal, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import circlewhite from '../../../Images/circlewhite.png';
import circleyellow from '../../../Images/circleyellow.png';

export default function Room({navigation}) {
  const carddata=[
      {
          header:'Meeting Room',
          active : 2,
          devices:6
      },
      {
          header:'Cabin',
          active : 2,
          devices:8
      },
      {
          header:'Room 1',
          active : 2,
          devices:6
      },
      {
          header:'Room 2',
          active : 2,
          devices:5
      },
  ]
  const handleDevices=(header)=>{
console.log(data)
navigation.navigate('devices' ,{header:header})
  }
  const [switchStates, setSwitchStates] = useState(Array(carddata.length).fill(false));
  const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});

  const toggleSwitch = (index) => {
    // console.log(index);
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
    console.log("you switched",newSwitchStates[index] , "of ",index)
setData(newSwitchStates[index],index)
  };
  const handleChange = (key, value) => {
    console.log(key, value);
    setData({
      ...data,
      [key]: value,
    });
  };
 const handleadddeive =()=>{
  console.log(data)
  setModalVisible(!modalVisible);
 }
 const handleaddroom=()=>{
  setModalVisible(true);

 }
  return (
    <View style={{width:'100%', height:'100%'}}>
      <View style={{width:'100%', height:60 , display:'flex', flexDirection:'row', justifyContent:'space-between',  alignItems:'center',top:20 }}>
        <Text style={{color:'black' , fontSize:20 , marginHorizontal:15 }} >Rooms</Text>
        <Pressable style={styles.addbtn} onPress={handleaddroom} >
          <Text style={{fontSize:16 , color:'white'}} >+ Add</Text>
        </Pressable>
      </View>

      <View style={{width:'100%' , height:'100%', top:20,display:'flex', flexWrap:'wrap' , flexDirection:'row' , justifyContent:'center',alignItems:'center'}} >
        {carddata.map((item,index)=>(
          <Pressable style={[styles.card, switchStates[index] && styles.activeCard]} onPress={()=>{handleDevices(item.header)}} >
            <LinearGradient
              colors={['#02D3D6', '#03B5CD']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <View style={styles.cardimg}>
                <Image source={circlewhite} style={{height:'100%', resizeMode:'contain', width:40 , marginHorizontal:5}} />
                <Switch
                  trackColor={{false: '#80DBE8', true: '#81b0ff'}}
                  thumbColor={'#F2F6FE'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch(index)}
                  value={switchStates[index]}
                />
              </View>

              <Text style={{color:'#FFFFFF' , fontSize:23 , marginLeft:5}}>{item.header}</Text>
              <View style={styles.bottomtext}>
                <Image source={circleyellow} style={{marginBottom:5}}/> 
                <Text style={{color:'#E7E7E7' , fontSize:13}}>
                  {item.active} Active | {item.devices} Devices
                </Text>
              </View>
            </LinearGradient>
          </Pressable>
        ))}
      </View>
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
          <TextInput placeholder=' Enter Room Name' style={styles.txtara}
        placeholderTextColor="#8DABA9"
        onChangeText={e => handleChange('room', e)}
            value={data.room}
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
  card:{
    height: 170,
    width: '40%',
    margin: 15,
    borderRadius: 10,
  },
  activeCard: {
    backgroundColor: 'red',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius:10
  },
  cardimg:{
    height:50,
    width:'100%',
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  bottomtext: {
    flex:2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 10,
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

});
