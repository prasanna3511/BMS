import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import homeback from '../../Images/homeback.png';
import Build1 from '../../Images/build1.png';
import Build2 from '../../Images/build2.png';
import Build3 from '../../Images/build3.png';

export default function Home({navigation}) {
  //   console.log('this is home');
  const carddata = [
    {
      img: Build1,
      Header: 'Building1',
      rooms: '4 ',
      devices: '10',
    },
    {
      img: Build2,
      Header: 'Building2',
      rooms: '4 ',
      devices: '10',
    },
    {
      img: Build3,
      Header: 'Building3',
      rooms: '4 ',
      devices: '10',
    },
  ];
  const handlebuilding = Header => {
    console.log(Header);
    navigation.navigate('room');
  };
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const handleChange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };
  const handleBuilding=()=>{
    setModalVisible(true)
  }
  const handlebuild=()=>{
    console.log(data)
    setModalVisible(!modalVisible)

  }
  return (
    <View style={{height: '100%', width: '100%', position: 'relative'}}>
      <ImageBackground source={homeback} style={{width: '100%', height: 300}}>
        <Text
          style={{color: 'black', margin: 20, fontWeight: '700', fontSize: 16}}>
          Hey, User
        </Text>
      </ImageBackground>
      <View style={styles.cardmain}>
        <View style={styles.topbtn}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 20}}>
            Buildings
          </Text>
          <Pressable style={styles.addbtn} onPress={handleBuilding} >
            <Text style={{fontSize: 16, color: 'white'}}>+ Add</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView
        style={{width: '100%', height: '100%'}}
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {carddata.map(item => (
          <Pressable
            style={styles.card}
            onPress={() => {
              handlebuilding(item.Header);
            }}>
            <Image
              source={item.img}
              style={{
                height: '100%',
                width: '50%',
                resizeMode: 'cover',
                opacity: 0.5,
              }}
            />
            <View
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 20,
                  marginRight: 10,
                  marginTop: 5,
                }}>
                {item.Header}
              </Text>
              <Text
                style={{
                  color: '#707070',
                  fontWeight: '300',
                  fontSize: 15,
                  marginRight: 10,
                  marginTop: 5,
                }}>
                {item.rooms} Rooms
              </Text>

              <Text
                style={{
                  color: '#707070',
                  fontWeight: '300',
                  fontSize: 15,
                  marginRight: 10,
                  marginTop: 5,
                }}>
                {item.devices} Devices
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput placeholder=' Enter Building Name' style={styles.txtara}
        placeholderTextColor="#8DABA9"
        onChangeText={e => handleChange('building', e)}
            value={data.building}
         />
         <TextInput placeholder=' Enter Room Quantity' style={styles.txtara}
        placeholderTextColor="#8DABA9"
        onChangeText={e => handleChange('roomq', e)}
            value={data.roomq}
         />
         <TextInput placeholder=' Enter Device Quantity' style={styles.txtara}
        placeholderTextColor="#8DABA9"
        onChangeText={e => handleChange('quantity', e)}
            value={data.quantity}
         />
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button]}
              onPress={()=>handlebuild()}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardmain: {
    position: 'absolute',
    top: 200, // Adjust the value as needed to align the card
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 3,
    display: 'flex',
  },
  addbtn: {
    height: 50,
    width: 100,
    // borderWidth:1,
    backgroundColor: '#007993',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  topbtn: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    marginLeft: 20,
  },
  card: {
    height: 120,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFE1BF',
    boxShadow: ' -1px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    marginVertical: 10,
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
