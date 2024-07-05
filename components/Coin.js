import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { TouchableOpacity } from "react-native";
import * as Haptics from 'expo-haptics';

export default function Coin ({onFlip}){
    const [CoinNumber, setCoinNumber] = useState(1);
    const [subscription, setSubscription] = useState(null)

    const subscribe = () => {
        setSubscription(
        Accelerometer.addListener(({ x, y, z }) => {
            if (Math.abs(x) > 2 || Math.abs(y) >2 || Math.abs(z) > 2) {
            flipCoin();
            }
        })
        );
        Accelerometer.setUpdateInterval(150);
    };

    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    const flipCoin = () => {
        const newCoinNumber = Math.floor(Math.random() * 2) + 1;
        setCoinNumber(newCoinNumber);
        onFlip(newCoinNumber); 
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    };

    useEffect(() => {
        subscribe();
        return () => unsubscribe();
    }, []);


    return (
        <View style={styles.container}>
        <Text style={styles.coinText}>{CoinNumber}</Text>
                <TouchableOpacity onPress={() => flipCoin()} style={styles.button}>
                    <Text style={styles.buttonText}>Flip Coin</Text>
                </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    coinText: {
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