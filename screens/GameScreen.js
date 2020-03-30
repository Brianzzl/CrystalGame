import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/colors';

const GameScreen = props => {
  return (
    <View style={styles.screen}>
      {/* <Icon style={styles.icon} name="gem" size={130} color={Colors.green} />
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity> */}

      <Text style={styles.instructionTitle}>Game screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    padding: 10,
    alignItems: 'center',
  },
  icon: {
    paddingTop: 60,
  },
  button: {
    paddingVertical: 20,
  },
  buttonText: {
    color: '#8080ff',
    fontWeight: '800',
    fontSize: 30,
  },
  instructionTitle: {
    paddingTop: 180,
    paddingBottom: 20,
    fontSize: 25,
    textAlign: 'left',
  },
  instruction: {
    fontSize: 15,
    paddingHorizontal: 20,
    textAlign: 'left',
  },
});

export default GameScreen;
