import React from 'react'
import { Stack } from 'expo-router'

import "../../styles/global.css"

export default function StackLayout() {
    return (
        <Stack>
            <Stack.Screen name="signup" options={{}} />
            <Stack.Screen name="login" options={{}} />
            <Stack.Screen name="forgot-password" options={{}} />
            <Stack.Screen name="verify-code" options={{}} />
            <Stack.Screen name="new-password" options={{}} />
            <Stack.Screen name="campaign" options={{}} />
            <Stack.Screen name="detailed-insights" options={{}} />
        </Stack>
    )
}