import React from 'react'
import { Stack } from 'expo-router'

import "../../styles/global.css"

export default function StackLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="signup" />
            <Stack.Screen name="login" />
            <Stack.Screen name="forgot-password" />
            <Stack.Screen name="verify-code" />
            <Stack.Screen name="new-password" />
            <Stack.Screen name="campaign" />
            <Stack.Screen name="detailed-insights" />
        </Stack>
    )
}