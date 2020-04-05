import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/colors';

const CrystalContainer = ({customStyle, name, onPress, color}) => {
  const [clickCounter, setClickCounter] = useState(0);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, ...customStyle}}
      activeOpacity={0.5}>
      <Icon style={styles.icon} name={name} size={100} color={color} />
      {/* <Text>{name}</Text> */}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
});

export default CrystalContainer;
