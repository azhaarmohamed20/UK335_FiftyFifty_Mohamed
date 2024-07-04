import { StyleSheet, View, Pressable, Text , TouchableOpacity} from "react-native";
import React, {useState} from 'react'


export default function Button ({ label, onPress}){
    const [isPressed, setIsPressed] = useState(false);
  

    return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={[styles.button, isPressed ? styles.buttonPressed : styles.buttonDefault]}
    >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 20,
        marginHorizontal: 10,
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:  {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel:{
        fontSize: 20,
        color: 'white'
    },
    buttonDefault: {
        backgroundColor: '#2196F3',
    },
    buttonPressed: {
        backgroundColor: '#9dc8eb',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})