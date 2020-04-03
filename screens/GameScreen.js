import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import _ from 'lodash';
import Colors from '../constants/colors';
import ScoreBoard from '../components/ScoreBoard';
import CrystalContainer from '../components/CrystalContainer';

//++++++++++++++++game Logic+++++++++++++++++++++++

const randomValueGenerator = max => {
  const val = Math.floor(Math.random() * max + 1);
  return val;
};

const generateValue = () => {
  return (a = [
    randomValueGenerator(15),
    randomValueGenerator(15),
    randomValueGenerator(15),
    randomValueGenerator(15),
  ]);
};

const total = value => {
  return (
    value[1] * randomValueGenerator(3) +
    value[2] * randomValueGenerator(3) +
    value[3] * randomValueGenerator(3) +
    value[0] * randomValueGenerator(3)
  );
};

const GameScreen = ({onGameOver}) => {
  const [valueArray, setValueArray] = useState(generateValue());
  const [target, setTarget] = useState(total(valueArray));

  //totalValue is your current total score
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (target <= totalValue) {
      // console.log('target is smaller/equal to total now!');
      onGameOver(target, totalValue);
    }
  }, [onGameOver, target, totalValue]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  onPressHandler = countNumber => {
    if (countNumber === 1) {
      setCount1(count1 + 1);
    } else if (countNumber === 2) {
      setCount2(count2 + 1);
    } else if (countNumber === 3) {
      setCount3(count3 + 1);
    } else {
      setCount4(count4 + 1);
    }
    // console.log(count1);
    // console.log(count2);
    // console.log(count3);
    // console.log(count4);
    updateTotalScore(countNumber);
  };

  const updateTotalScore = countNumber => {
    setTotalValue(totalValue + valueArray[countNumber - 1]);
    // console.log('your score is : ' + totalValue);
    // console.log('your target is : ' + target);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.scoreBoard}>
        <ScoreBoard score={target} title={'target Score'} />
        <ScoreBoard score={totalValue} title={'Your Score'} />
      </View>
      <View style={styles.CrystalsContainer}>
        <CrystalContainer
          customStyle={styles.item}
          name={'gem'}
          onPress={() => {
            onPressHandler(1);
          }}
        />
        <CrystalContainer
          onPress={() => {
            onPressHandler(2);
          }}
          customStyle={styles.item}
          name={'bell'}
        />
        <CrystalContainer
          onPress={() => {
            onPressHandler(3);
          }}
          customStyle={styles.item}
          name={'heart'}
        />
        <CrystalContainer
          onPress={() => {
            onPressHandler(4);
          }}
          customStyle={styles.item}
          name={'star'}
        />
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
