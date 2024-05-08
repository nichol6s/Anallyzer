import React from "react";
import { Stack } from "expo-router";

import "@/styles/global.css"

import { useFonts } from "expo-font";
import {
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold
} from "@expo-google-fonts/plus-jakarta-sans"

import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold

} from "@expo-google-fonts/montserrat"

export default function AppLayout() {
    const [fontsLoaded] = useFonts({
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(stack)" />
        </Stack>
    )
}