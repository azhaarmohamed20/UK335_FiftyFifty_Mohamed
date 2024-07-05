import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerTitle: "Home",
                title: "Home",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }} />
            <Tabs.Screen name="history" options={{
                headerTitle: "History",
                title: "History",
                tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="clock-rotate-left" color={color} />,
            }}/>
        </Tabs>
    )
}