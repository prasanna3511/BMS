import { View, Text  , Image, Pressable} from 'react-native'
import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../Home/Home';
import All from './All';
import Lights from './Lights';
import Temp2 from '../Home/Temp2';
import AirConditioner from './AirConditioner';

export default function Tabs({navigation}) {
    const Tab = createMaterialTopTabNavigator();
    const handleTab1=()=>{
        console.log('tab1 pressed')
    }
  return (
   
      <Tab.Navigator
      tabBarOptions={{
        showLabel: false,}}
      >
      <Tab.Screen
        name="All"
        component={All}
        options={{
            tabBarVisible: true,
            tabBarIcon: ({focused}) => (
              <View
                style={{
               width:50,
               height:30,
               backgroundColor:focused?'#007993':'white',
           display: 'flex',
           justifyContent:'center',
           alignItems: 'center',
           borderRadius:15
                }} onPress={handleTab1} >
               
                <Text style={{color:focused?'#FFFFFF':'#009999', fontSize:13}}>All</Text>
              </View>
            ),
          }}
      />
      <Tab.Screen
      name="Lights"
      component={Lights}
      options={{
        tabBarVisible: true,
        tabBarIcon: ({focused}) => (
          <View
            style={{
           width:70,
           height:30,
           marginLeft:-15,
           backgroundColor:focused?'#007993':'white',
           display: 'flex',
           justifyContent:'center',
           alignItems: 'center',
           borderRadius:15
            }} onPress={handleTab1} >
           
            <Text style={{color:focused?'#FFFFFF':'#009999' , fontSize:13}}>Lights</Text>
          </View>
        ),
      }}
      />
      <Tab.Screen
        name="Air Conditioner"
        component={AirConditioner}
        options={{
            tabBarVisible: true,
            tabBarIcon: ({focused}) => (
              <View
                style={{
               width:125,
               height:30,
               marginLeft:-45,
               backgroundColor:focused?'#007993':'white',
               display: 'flex',
               justifyContent:'center',
               alignItems: 'center',
               borderRadius:15

                }} onPress={handleTab1} >
               
                <Text style={{color:focused?'#FFFFFF':'#009999' , fontSize:13}}>AirConditioner</Text>
              </View>
            ),
          }}
      />
    </Tab.Navigator>
   
  )
}