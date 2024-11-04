import React from "react"
import { useEffect, useState } from "react"
import { Stack, useRouter } from "expo-router"
import { ActivityIndicator } from "react-native"

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
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		PlusJakartaSans_500Medium,
		PlusJakartaSans_600SemiBold,
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_700Bold,
	})

	useEffect(() => {
		const checkAuth = async () => {
			const unsubscribe = onAuthStateChanged(auth, async (user) => {
				if (user) {
					await router.replace("/overview")
				} else {
					await router.replace("/login")
				}
				setLoading(false)
			})
			return unsubscribe
		}

		checkAuth()
	}, [])

	if (loading || !fontsLoaded) {
		return (
			<ActivityIndicator
				size="large"
				color="#BFB7FD"
				className="flex-1"
			/>
		)
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="(tabs)" />
			<Stack.Screen name="(stack)" />
		</Stack>
	)
}
