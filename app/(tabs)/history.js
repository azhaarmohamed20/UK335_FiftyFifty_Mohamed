import { StyleSheet, Text, View } from "react-native";

export default function HistoryPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Fifty-Fifty HistoryPage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3
    },
    title :{
        fontSize: 30,
        fontWeight: 'bold'
    }
})