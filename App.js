import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import moduleName from '';

//screen and components
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import Header from './components/Header';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [WinCondition, setWinStatus] = useState();

  const startGameHandler = () => {
    setGameStarted(true);
  };

  const newGameHandler = () => {
    setGameStarted(false);
    setGameOver(false);
  };

  const gameOverHandler = (target, yourFinalGuess) => {
    if (target === yourFinalGuess) {
      console.log('game Over,win');
      setWinStatus(true);
      setGameOver(true);
    } else {
      console.log('game loose');
      setWinStatus(false);
      setGameOver(true);
      setWinStatus();
    }
  };

  let content = <StartScreen onStartGame={startGameHandler} />;

  if (gameStarted === true && gameOver === false) {
    content = <GameScreen onGameOver={gameOverHandler} />;
  } else if (gameStarted === true && gameOver === true) {
    content = (
      <GameOverScreen gameResult={WinCondition} onRestart={newGameHandler} />
    );
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
