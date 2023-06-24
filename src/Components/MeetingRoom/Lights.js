import { View, Text, Switch, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import whitecircle from '../../Images/wcircle.png';

export default function Lights() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((previousState) => !previousState);
    console.log(isOn);
  };
  const [data, setData] = useState({});
  // const [modalVisible, setModalVisible] = useState(false);
  const handleChange = (key, value) => {
    console.log("key is",key, value);
    setData({
      ...data,
      [key]: value,
    });
  };

  const carddata = [
    {
      key: 1,
      img: whitecircle,
      name: 'light 1',
      status: 'On',
      selected: false,
      ofstatus: 'off',
    },
    {
      key: 2,
      img: whitecircle,
      name: 'light 2',
      status: 'on',
      selected: false,
      ofstatus: 'off',
    },
    {
      key: 3,
      img: whitecircle,
      name: 'light 3',
      status: 'On',
      selected: false,
      ofstatus: 'off',
    },
    {
      key: 4,
      img: whitecircle,
      name: 'light 4',
      status: 'on',
      selected: false,
      ofstatus: 'off',
    },
  ];

  const handleLights = (key) => {
    console.log(data)
    setCardData((prevData) =>
      prevData.map((item) => {
        if (item.key === key) {
          // console.log(object)
          setData(`${item.name}, ${!item.selected}`)
          console.log(`Item ${item.name} selected: ${!item.selected}`);
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };

  const [cardData, setCardData] = useState(carddata);

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
        }}
      >
        <Text style={{ color: 'black', fontSize: 20 }}>Lights</Text>

        <ToggleSwitch
          isOn={isOn ? true : false}
          onColor="green"
          offColor="#009999"
          size="medium"
          onToggle={toggleSwitch}
          value={isOn}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {cardData.map((item) => (
          <Pressable
            key={item.key}
            style={{
              width: '40%',
              height: 200,
              borderRadius: 8,
              margin: 15,
              backgroundColor: item.selected ? '#11293C' : '#FFE1BF',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            onPress={() => {
              handleLights(item.key);
            }}
          >
            <Image
              source={item.img}
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
            />
            <Text style={{ color: item.selected ? '#FFFFFF' : 'black', fontSize: 18 }}>{item.name}</Text>
            <Text style={{ color: item.selected ? '#FFFFFF' : 'black', fontSize: 15 }}>{item.status}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
