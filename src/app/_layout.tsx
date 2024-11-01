import React from "react"
import { useEffect } from "react"
import { Stack, useRouter } from "expo-router"

import "@/styles/global.css"

import { useFonts } from "expo-font"
import { PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold } from "@expo-google-fonts/plus-jakarta-sans"

import {
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/services/firebaseConfig"

export default function AppLayout() {
	const router = useRouter()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// Usuário está logado, redireciona para a tela principal
				router.replace("/(tabs)/overview")
			} else {
				// Usuário não está logado, redireciona para o login
				router.replace("/(stack)/login")
			}
		})

		return unsubscribe
	}, [])

	const [fontsLoaded] = useFonts({
		PlusJakartaSans_500Medium,
		PlusJakartaSans_600SemiBold,
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_700Bold,
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
