import { View, Text  , Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import Temp1 from '../Home/Temp1';
import Temp2 from '../Home/Temp2';
import { Icon } from 'react-native-elements'
import Room from '../Home/Room/Room';
// import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
// const DashboardStack = createStackNavigator();
// const DashboardScreen = () => {
//   return (
//     <DashboardStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       {/* <DashboardStack.Screen name="Dashboard" component={Dashboard} /> */}
//       <DashboardStack.Screen
//     name="home"
//     component={Home}
//     options={{
//       tabBarVisible: true,
//       tabBarIcon: ({focused}) => (
//         <View
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Image
//             style={{height: 30, width: 30 , resizeMode:'contain'}}
//             source={require('../../Images/home3.png')}

//           />
//         </View>
//       ),
//     }}
//       />
//       {/* <DashboardStack.Screen name="PlayList" component={PlayList} /> */}
//       {/* <DashboardStack.Screen name="Sahitya_audio" component={Sahitya_audio} /> */}
//     </DashboardStack.Navigator>
//   );
// };


export default function Tabs({navigation}) {
  return (
   
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
        //   height: '100%',
        },
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        showLabel: false,
        screenOptions: {
          position: 'fixed',
        //   height:50,
        //   bottom: 25,
        //   left: 20,
        //   right: 20,
          elevation: 0,
          // backgroundColor: 'red',
          tabBarActiveTintColor:{
            borderBottom: '1px solid white'
          }
        },
      }}
      >
      <Tab.Screen
        name="dashboard"
        component={Home}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 30, width: 30 , resizeMode:'contain'}}
                source={require('../../Images/home3.png')}

              />
            </View>
          ),
        }}
      />
      <Tab.Screen
      name="temp1"
      component={Temp1}
        options={{
        //   tabBarVisible: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                resizeMode: 'contain',
              }}>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={require('../../Images/Vector.png')}
              />
              {/* <Text style={{color: '#20419B'}}>Subscription</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="temp2"
        component={Temp2}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {/* <TouchableOpacity onPress={() => navigation.pop()}> */}

              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={require('../../Images/setting2.png')}

              />
                {/* </TouchableOpacity> */}

              {/* <Text style={{color: '#20419B'}}>About Us</Text> */}
            </View>
            
          ),
        }}
      />
    </Tab.Navigator>
   
  )
}