import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Components/Login';
// import Home from './src/Components/Home/Home';
import TabSupport from './src/Components/Tabs/TabSupport';
import Room from './src/Components/Home/Room/Room';
import Devices from './src/Components/Devices/Devices';
import Lightsmeet from './src/Components/MeetingRoom/Lights';
import AirConditionermeet from './src/Components/MeetingRoom/AirConditioner';
import SpeedCheck from './src/Components/MeetingRoom/SpeedCheck';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="tab" component={TabSupport} options={{headerShown:false}} />
      <Stack.Screen name="room" component={Room} options={{title:'Building Room'}}  />
      <Stack.Screen name="devices" component={Devices} options={{title:'Meeting Room'}} />
      <Stack.Screen name="lights" component={Lightsmeet} options={'meeting room'} />
      <Stack.Screen name="aircondition" component={AirConditionermeet} options={'meeting room'} />
      <Stack.Screen name="speedcheck" component={SpeedCheck} options={'meeting room'} />






      </Stack.Navigator>
        
        </NavigationContainer>
  )
}