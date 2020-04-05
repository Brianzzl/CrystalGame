import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ScoreBoard from '../components/ScoreBoard';
import CrystalContainer from '../components/CrystalContainer';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
//++++++++++++++++game Logic+++++++++++++++++++++++

const randomValueGenerator = (max) => {
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

const total = (value) => {
  return (
    value[1] * randomValueGenerator(3) +
    value[2] * randomValueGenerator(3) +
    value[3] * randomValueGenerator(3) +
    value[0] * randomValueGenerator(3)
  );
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <Text style={styles.listText}>
      You clicked{'  '}
      <Icon
        style={styles.icon}
        name={itemData.item.patternName}
        size={13}
        color="black"
      />
    </Text>
    <Text style={styles.listText}>
      Current Score: <Text style={styles.number}> {itemData.item.score}</Text>
    </Text>
  </View>
);

const GameScreen = ({onGameOver}) => {
  const [valueArray, setValueArray] = useState(generateValue());
  const [target, setTarget] = useState(total(valueArray));

  const [gameLog, setGameLog] = useState([]);

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

  onPressHandler = (countNumber) => {
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

  const updateTotalScore = (countNumber) => {
    setTotalValue(totalValue + valueArray[countNumber - 1]);
    if (countNumber === 1) {
      setGameLog([
        {patternName: 'gem', score: parseInt(totalValue + valueArray[0])},
        ...gameLog,
      ]);
    } else if (countNumber === 2) {
      setGameLog([
        {patternName: 'bell', score: totalValue + valueArray[1]},
        ...gameLog,
      ]);
    } else if (countNumber === 3) {
      setGameLog([
        {patternName: 'heart', score: totalValue + valueArray[2]},
        ...gameLog,
      ]);
    } else {
      setGameLog([
        {patternName: 'star', score: totalValue + valueArray[3]},
        ...gameLog,
      ]);
    }
  };

  return (
    <View style={styles.screen}>
      {/* <View style={styles.scoreBoard}> */}
      <ScoreBoard score={target} title={'Target Score'} />
      {/* </View> */}
      <View style={styles.CrystalsContainer}>
        <CrystalContainer
          customStyle={styles.item}
          name={'gem'}
          color={Colors.pink}
          onPress={() => {
            onPressHandler(1);
          }}
        />
        <CrystalContainer
          color={Colors.grey}
          onPress={() => {
            onPressHandler(2);
          }}
          customStyle={styles.item}
          name={'bell'}
        />
        <CrystalContainer
          color={Colors.green}
          onPress={() => {
            onPressHandler(3);
          }}
          customStyle={styles.item}
          name={'heart'}
        />
        <CrystalContainer
          color={Colors.orange}
          onPress={() => {
            onPressHandler(4);
          }}
          customStyle={styles.item}
          name={'star'}
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.score.toString()}
        data={gameLog}
        renderItem={renderListItem.bind(this, gameLog.length)}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  // scoreBoard: {
  //   padding: 20,
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  CrystalsContainer: {
    padding: 10,
    paddingBottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    width: '50%',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listItem: {
    width: 240,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listText: {
    fontFamily: 'AlegreyaSans-Regular',
    fontSize: 18,
  },
  // for the number in the list
  number: {
    color: Colors.blue,
    fontSize: 18,
    fontFamily: 'AlegreyaSans-Regular',
  },
});

export default GameScreen;
