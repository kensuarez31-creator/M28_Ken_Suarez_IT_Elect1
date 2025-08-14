import React, { useState } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title="White" onPress={() => changeColor('white')} />
      <Button title="Purple" onPress={() => changeColor('purple')} />
      <Button title="Orange" onPress={() => changeColor('orange')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,  // Cover the entire width
    height: Dimensions.get('window').height, // Cover the entire height
  },
});

export default ColorChangerApp;
