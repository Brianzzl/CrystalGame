import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../constants/colors';
import ScoreBoard from '../components/ScoreBoard';
import CrystalContainer from '../components/CrystalContainer';

const GameScreen = props => {
  return (
    <View style={styles.screen}>
      {/* <Icon style={styles.icon} name="gem" size={130} color={Colors.green} />
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity> */}
      <View style={styles.scoreBoard}>
        <ScoreBoard score={120} title={'target Score'} />
        <ScoreBoard score={20} title={'Your Score'} />
      </View>
      <View style={styles.CrystalsContainer}>
        <CrystalContainer customStyle={styles.item} name={'gem'} />
        <CrystalContainer customStyle={styles.item} name={'bell'} />
        <CrystalContainer customStyle={styles.item} name={'heart'} />
        <CrystalContainer customStyle={styles.item} name={'star'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  scoreBoard: {
    padding: 20,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CrystalsContainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    width: '50%',
  },
});

export default GameScreen;
