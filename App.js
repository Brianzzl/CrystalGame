import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//screen and components
// import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import Header from './components/Header';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameHandler = () => {
    setGameStarted(true);
  };
  let content = <StartScreen onStartGame={startGameHandler} />;

  if (gameStarted === true) {
    content = <GameScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
