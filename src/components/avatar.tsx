import React from "react"
import { View, Image } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface AvatarImageProps {
	uri?: string
}

export default function AvatarImage({ uri }: AvatarImageProps) {
	return (
		<View className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden">
			{uri ? (
				<Image
					source={{ uri }}
					className="w-full h-full"
				/>
			) : (
				<View className="w-full h-full items-center justify-center">
					<MaterialCommunityIcons
						name="account"
						size={48}
						color="gray"
					/>
				</View>
			)}
		</View>
	)
}
