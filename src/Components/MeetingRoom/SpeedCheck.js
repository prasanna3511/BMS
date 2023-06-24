import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

export default function SpeedCheck(route) {
  const [speed, setSpeed] = useState(0);
  const animatedLineWidth = new Animated.Value(0);

  const updateSpeed = (newSpeed) => {
    setSpeed(newSpeed);
    Animated.timing(animatedLineWidth, {
      toValue: newSpeed,
      duration: 500, // You can adjust the duration as needed
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    updateSpeed(40);
  }, [route]);

  return (
    <View style={styles.container}>
      <Text>SpeedCheck</Text>
      <View style={styles.circle}>
        <Animated.View
          style={[
            styles.line,
            {
              width: animatedLineWidth.interpolate({
                inputRange: [0, 100], // Assuming the speed range is from 0 to 100
                outputRange: ['0%', '100%'],
              }),
              borderRadius: animatedLineWidth.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 50], // Half of the line's height
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    height: 2,
    backgroundColor: 'red',
  },
});
