import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import GameScreen from './GameScreen';

const GameOverScreen = ({gameResult, onRestart}) => {
  const result =
    gameResult === true ? <Text>You Win</Text> : <Text>You Loose</Text>;

  return (
    <View>
      <Text>game is over</Text>

      {result}
      <Button title="New Game" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;
