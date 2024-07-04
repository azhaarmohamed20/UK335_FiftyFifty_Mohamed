import { StyleSheet, Text, View } from "react-native";
import Dice from "../../components/Dice";
import React,{useState} from "react";
export default function HomePage(){
    const [latestRoll, setLatestRoll] = useState(1);

    const handleRoll = (number) => {
        setLatestRoll(number);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Fifty-Fifty</Text>
            <Text style={styles.latestRollText}>Latest Roll: {latestRoll}</Text>
            <Dice onRoll={handleRoll} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    latestRollText: {
      fontSize: 20,
      marginBottom: 20,
    },
  });