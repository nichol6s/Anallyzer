import React from "react"
import { View, Image } from "react-native"

export default function AvatarImage() {
    return (
        <View className="w-[82] h-[82] p-2 bg-white rounded-lg">
            <Image className="w-full h-full rounded-lg" source={require("@/assets/plusoft-icon.png")} />
        </View>
    )
}