import { Stack } from "expo-router";
import { RollHistoryProvider } from "../components/RollHistoryContext";

export default function RootLayout(){
    return(
        <RollHistoryProvider>
            <Stack>
                <Stack.Screen name='(tabs)' options={{
                    headerShown: false
                }} />
            </Stack>
        </RollHistoryProvider>
        
    )
}