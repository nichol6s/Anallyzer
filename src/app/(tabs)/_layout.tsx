import { Octicons, Feather, Entypo } from "@expo/vector-icons";
import { Tabs } from "expo-router";


import React from "react"

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarLabel: () => false }} >
            <Tabs.Screen
                name="overview"
                options={{
                    tabBarIcon: ({ color }) => <Octicons name="home" size={22} color={color} />,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "black",
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    tabBarIcon: ({ color }) => <Feather name="pie-chart" size={22} color={color} />,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "black",
                }}
            />
            <Tabs.Screen
                name="insights"
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="light-bulb" size={22} color={color} />,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "black"
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => <Feather name="user" size={22} color={color} />,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "black"
                }}
            />
        </Tabs>
    )
}