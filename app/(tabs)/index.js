import { StyleSheet, Text, View } from "react-native";
import Dice from "../../components/Dice";
import React,{useState} from "react";
import Coin from "../../components/Coin";
import Button from "../../components/Button";

export default function HomePage(){
    const [latestRoll, setLatestRoll] = useState(1);
    const [latestFlip, setLatestFlip] = useState(1);

    const handleRoll = (number) => {
        setLatestRoll(number);
    };
    const handleFlip = (number) => {
      setLatestFlip(number);
    };


    const [active, setActive] = React.useState(1);
    const SetView = (active) => {
      setActive(active);
    };
    const ActiveView = () => {
      switch (active) {
        case 1:
          return (
            <View style={styles.viewholder} >
                <Text style={styles.title}>Dice</Text>
                <Text style={styles.latestRollText}>Latest Roll: {latestRoll}</Text>
                <Dice onRoll={handleRoll} />
            </View>
          );
        case 2:
          return (
            <View style={styles.viewholder} >
                <Text style={styles.title}>Coin</Text>
                <Text style={styles.latestRollText}>Latest Flip: {latestFlip}</Text>
                <Coin onFlip={handleFlip} />
            </View>
          );
        default:
          return (
            <View style={styles.viewholder} >     
                <Text style={styles.latestRollText}>Latest Roll: {latestRoll}</Text>
                <Dice onRoll={handleRoll} />
            </View>
          );
      }
    };


    return(
        <View style={styles.container}>
          <View style={styles.buttonholder}>
            <Button label="Dice" onPress={() => SetView(1)} />
            <Button label="Coin" onPress={() => SetView(2)} />
          </View>
          {ActiveView()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      position: 'relative'
    },
    latestRollText: {
      fontSize: 20,
      marginBottom: 20,
    },
    title : {
      fontSize: 25,
      fontWeight: 'bold',
    },
    viewholder : {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
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