import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScoreBoard = ({customTitleStyle, customScoreStyle, score, title}) => (
  <View style={styles.ScoreBoard}>
    <Text style={{...styles.body, ...customTitleStyle}}>
      {title}
      {'  '}
    </Text>
    <Text style={{...styles.score, ...customScoreStyle}}>{score}</Text>
  </View>
);

const styles = StyleSheet.create({
  ScoreBoard: {
    flexDirection: 'row',
    padding: 15,
    margin: 15,
    justifyContent: 'space-between',
  },
  body: {
    fontSize: 30,
    fontFamily: 'AlegreyaSans-Regular',
    marginVertical: 20,
  },
  score: {
    fontSize: 30,
    fontFamily: 'AlegreyaSans-Regular',
    color: 'red',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#9ab7d3',
    padding: 10,
    marginVertical: 10,
  },
});

export default ScoreBoard;
