import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { TouchableOpacity } from "react-native";
import * as Haptics from 'expo-haptics';

export default function Dice({ onRoll }) {
    
  const [diceNumber, setDiceNumber] = useState(1);
  const [subscription, setSubscription] = useState(null);


  
  const subscribe = () => {
   setSubscription(
      Accelerometer.addListener(({ x, y, z }) => {
        if (Math.abs(x) > 2 || Math.abs(y) > 2 | Math.abs(z) >2) {
          rollDice();
        }
      })
    ); 
    Accelerometer.setUpdateInterval(150);
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const rollDice = () => {
    const newDiceNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newDiceNumber);
    onRoll(newDiceNumber);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.diceText}>{diceNumber}</Text>
            <TouchableOpacity onPress={() => rollDice()} style={styles.button}>
                <Text style={styles.buttonText}>Roll Dice</Text>
            </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    diceText: {
      fontSize: 100,
      fontWeight: 'bold',
    },
    button: {
      marginTop: 20,
      padding: 20,
      backgroundColor: '#2196F3',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
    },
  });