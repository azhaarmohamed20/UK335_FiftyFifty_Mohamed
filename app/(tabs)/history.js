// /app/screens/HistoryPage.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RollHistoryContext } from '../../components/RollHistoryContext';

const HistoryPage = () => {
  const { rollHistory } = useContext(RollHistoryContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roll History</Text>
      <FlatList
        data={rollHistory}
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
