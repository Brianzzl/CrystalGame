import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/colors';
const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Button title="START" />

      <Text style={styles.instructionTitle}>Game Instrucation:</Text>
      <Text style={styles.instruction}>
        One can find this dialog by clicking on the big round Office button (top
        left of Word) and then clicking on the Word Options button at the botton
        of the dialog box.
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
  instructionTitle: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 30,
  },
  instruction: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
});

export default StartScreen;
