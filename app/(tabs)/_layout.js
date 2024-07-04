import { Tabs } from "expo-router";

export default function TabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerTitle: "Home",
                title: "Home"
            }} />
            <Tabs.Screen name="history" options={{
                headerTitle: "History",
                title: "History"
            }}/>
        </Tabs>
    )
}