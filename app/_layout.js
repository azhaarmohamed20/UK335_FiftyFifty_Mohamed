import { Stack } from "expo-router";
import {DiceRollHistoryProvider } from "../components/DiceHistoryContext";
import { CoinFlipHistoryProvider } from "../components/CoinHistoryContext";

export default function RootLayout(){
    return(
        <DiceRollHistoryProvider>
            <CoinFlipHistoryProvider>
                <Stack>
                    <Stack.Screen name='(tabs)' options={{
                        headerShown: false
                    }} />
                </Stack>
                </CoinFlipHistoryProvider>
        </DiceRollHistoryProvider>
        
    )
}