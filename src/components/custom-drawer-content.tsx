import { Feather } from "@expo/vector-icons"
import { View, Text, Pressable } from "react-native"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "expo-router"

export default function CustomDrawerContent() {
	const router = useRouter()
	const auth = getAuth()

	const handleSignOut = async () => {
		try {
			await signOut(auth)
			router.replace("/(stack)/login")
		} catch (error) {
			console.error("Error signing out:", error)
		}
	}

	return (
		<View className="flex-1">
			<View className="absolute bottom-12 w-full px-4">
				<Pressable
					onPress={handleSignOut}
					className="flex-row items-center gap-2 p-4 active:opacity-70"
				>
					<Feather
						name="log-out"
						size={24}
						color="red"
					/>
					<Text className="text-base font-medium text-red">Sair da conta</Text>
				</Pressable>
			</View>
		</View>
	)
}
