import { Tabs } from "expo-router";
import React from "react"

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index"/>
            <Tabs.Screen name="teste"/>

        </Tabs>
    )
}