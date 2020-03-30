import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//screen and components
// import GameOverScreen from './screens/GameOverScreen';
// import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header />

      <StartScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
