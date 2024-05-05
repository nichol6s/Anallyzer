import { Stack } from "expo-router";
import React from "react";

import "../styles/global.css"

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{}} />
            <Stack.Screen name="login" options={{}} />
        </Stack>
    )
}