import React from "react"
import { Pressable, PressableProps } from "react-native"
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"

function Arrow({ ...rest }: PressableProps) {
	return (
		<Pressable
			className="w-16 h-16 items-center justify-center border border-black-200/20 rounded-full p-2 active:opacity-70"
			{...rest}
		>
			<AntDesign
				name="arrowleft"
				size={24}
			/>
		</Pressable>
	)
}

function Gallery({ ...rest }: PressableProps) {
	return (
		<Pressable
			className="w-14 h-14 items-center justify-center border border-black-200/20 rounded-full p-2 active:opacity-70"
			{...rest}
		>
			<MaterialCommunityIcons
				name="image"
				size={24}
			/>
		</Pressable>
	)
}

const Icons = {
	Arrow,
	Gallery,
}

export { Icons }
