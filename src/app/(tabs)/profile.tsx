import React from "react"
import { View, Text } from "react-native"

import { LinearGradient } from "expo-linear-gradient"

export default function Profile() {
    return (
        <LinearGradient
            colors={['#DAD5FB', '#FFF']}
            start={[0, 0]}
            end={[0, 1]}
            className="flex-1 p-6"
        >
            <View className="flex w-full mt-40">
                <Text className="text-purple-600">Profile Page</Text>
            </View>
        </LinearGradient>
    )
}