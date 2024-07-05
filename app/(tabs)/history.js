// /app/screens/HistoryPage.js
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { DiceRollHistoryContext } from '../../components/DiceHistoryContext';
import { CoinFlipHistoryContext } from '../../components/CoinHistoryContext';
import Button from '../../components/Button';

const HistoryPage = () => {
    const { diceRollHistory } = useContext(DiceRollHistoryContext);
    const { coinFlipHistory } = useContext(CoinFlipHistoryContext);


    const [active, setActive] = React.useState(1);
    const SetView = (active) => {
      setActive(active);
    };
    const ActiveView = () => {
      switch (active) {
        case 1:
          return (
            <View style={styles.viewholder}>
              <Text style={styles.title}>Dice Roll History</Text>
              <FlatList
                data={diceRollHistory}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(_item, index) => index.toString()}
              />    
            </View>
          );
        case 2:
          return (
            <View style={styles.viewholder}>
              <Text style={styles.title}>Coin Flip History</Text>
              <FlatList
                data={coinFlipHistory}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(_item, index) => index.toString()}
              />
            </View>
          );
        default:
        return (
            <View style={styles.viewholder}>
              <Text style={styles.title}>Dice Roll History</Text>
              <FlatList
                data={diceRollHistory}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(_item, index) => index.toString()}
              />    
            </View>
          );
        }
    };



  return (
    <View style={styles.container}>
      <View style={styles.buttonholder} >
        <Button label="Dice" onPress={() => SetView(1)} />
        <Button label="Coin" onPress={() => SetView(2)}/>
      </View>
      {ActiveView()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  viewholder : {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '75%'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    padding: 10,
  },
  buttonholder : {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    margin: 20,
  }
});

export default HistoryPage;
