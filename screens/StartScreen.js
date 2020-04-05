import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/colors';

const StartScreen = ({onStartGame}) => {
  console.log('start screen');
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => {
          onStartGame();
        }}>
        <Icon style={styles.icon} name="gem" size={180} color={Colors.green} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => {
          onStartGame();
        }}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>

      <Text style={styles.instructionTitle}>Game Instruction:</Text>
      <Text style={styles.instruction}>
        There will be four crystals displayed as buttons in the game. Each
        crystal has a random value that gets added to your total when clicked
        on. Match your score wih target score to win the gane.
      </Text>
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
    fontSize: 40,
    fontFamily: 'SpicyRice-Regular',
  },
  instructionTitle: {
    paddingTop: 130,
    paddingBottom: 20,
    fontSize: 25,
    textAlign: 'left',
    fontFamily: 'AlegreyaSans-Regular',
  },
  instruction: {
    fontSize: 15,
    paddingHorizontal: 20,
    textAlign: 'left',
    fontFamily: 'AlegreyaSans-Light',
  },
});

export default StartScreen;
