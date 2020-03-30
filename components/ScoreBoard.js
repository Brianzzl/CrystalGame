import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScoreBoard = ({customTitleStyle, customScoreStyle, score, title}) => (
  <View>
    <Text style={{...styles.body, ...customTitleStyle}}>{title}</Text>
    <Text style={{...styles.body, ...customScoreStyle}}>{score}</Text>
  </View>
);

const styles = StyleSheet.create({
  body: {},
});

export default ScoreBoard;
