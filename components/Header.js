import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Crystal Game</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    backgroundColor: Colors.blue,
    paddingTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 40,
  },
});

export default Header;
