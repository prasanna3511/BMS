import { View, Text, Switch, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import whitecircle from '../../Images/wcircle.png';

export default function AirConditioner({ navigation }) {
  const carddata = [
    {
      key: 1,
      img: whitecircle,
      name: 'air conditioner 1',
      status: 'On',
    },
    {
      key: 2,
      img: whitecircle,
      name: 'air conditioner 2',
      status: 'Off',
    },
    {
      key: 3,
      img: whitecircle,
      name: 'air conditioner 3',
      status: 'On',
    },
    {
      key: 4,
      img: whitecircle,
      name: 'air conditioner 4',
      status: 'Off',
    },
  ];

  const [isEnabled, setIsEnabled] = useState(Array(carddata.length).fill(false));
  const [light1, setlight1] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitchcard = (key) => {
    const newSwitchStates = [...isEnabled];
    newSwitchStates[key] = !newSwitchStates[key];
    setIsEnabled(newSwitchStates);
    setlight1(true);
    console.log(key);
  };

  const [switchStates, setSwitchStates] = useState(Array(carddata.length).fill(false));

  const toggleSwitch = (index) => {
    console.log(index);
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
    console.log('you switched', newSwitchStates[index], 'of', index);
  };

  const handleLights = (key) => {
    console.log(key);
    navigation.navigate('speedcheck', { temp: 'hello' });
  };

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          width: '100%',
          height: 60,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ color: 'black', fontSize: 20 }}>Air Condtioner</Text>
        <ToggleSwitch isOn={isOn ? true : false} onColor="green" offColor="#009999" size="medium" onToggle={toggleSwitch} value={isOn} />
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {carddata.map((item, index) => (
          <Pressable
            key={item.key}
            style={{
              width: '40%',
              height: 200,
              borderRadius: 8,
              margin: 15,
              backgroundColor: switchStates[index] ? '#03B5CD' : '#80DBE8',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            onPress={() => {
              handleLights(item.key);
            }}>
            <Image source={item.img} style={{ width: 100, height: 100, resizemode: 'contain' }} />
            <Text style={{ color: switchStates[index]?'white':'black', fontSize: 18 }}>{item.name}</Text>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ color:switchStates[index]?'white':'black', fontSize: 15 }}>{item.status}</Text>
              <Switch
                trackColor={{ false: '#03B5CD', true: '#81b0ff' }}
                thumbColor={'#F2F6FE'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(index)}
                value={switchStates[index]}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
