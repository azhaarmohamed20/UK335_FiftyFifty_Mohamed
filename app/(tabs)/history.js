// /app/screens/HistoryPage.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { DiceRollHistoryContext } from '../../components/DiceHistoryContext';
import { CoinFlipHistoryContext } from '../../components/CoinHistoryContext';

const HistoryPage = () => {
  const { diceRollHistory } = useContext(DiceRollHistoryContext);
  const { coinFlipHistory } = useContext(CoinFlipHistoryContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roll History</Text>
      <FlatList
        data={diceRollHistory}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.title}>Coin Flip History</Text>
      <FlatList
        data={coinFlipHistory}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
});

export default HistoryPage;
