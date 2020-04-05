import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import GameScreen from './GameScreen';

const GameOverScreen = ({gameResult, onRestart}) => {
  const result =
    gameResult === true ? (
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/img/wins.jpg')}
            // source={{
            //   uri:
            //     'https://image.freepik.com/free-vector/you-win-sign-pop-art-style_175838-499.jpg',
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    ) : (
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/img/lose1.jpg')}
            // source={{
            //   uri:
            //     'https://previews.123rf.com/images/argus456/argus4561604/argus456160403753/54876745-you-lose-isolated-red-rubber-stamp-on-a-solid-white-background.jpg',
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    );

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>GAME OVER</Text>

      {result}
      {/* <Button title="New Game" onPress={onRestart} /> */}

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onRestart}>
        <Text style={styles.buttonText}>RESTART</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingBottom: 20,
    fontSize: 50,
    fontFamily: 'AlegreyaSans-Bold',
    color: '#9ab7d3',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
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
});

export default GameOverScreen;
