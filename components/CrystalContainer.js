import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CrystalContainer = ({customStyle, name}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...customStyle}}
      activeOpacity={0.8}>
      <Icon style={styles.icon} name={name} size={100} color="black" />
      <Text>{name}</Text>
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
