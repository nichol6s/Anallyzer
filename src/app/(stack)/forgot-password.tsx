import { useState, useEffect } from "react"
import { Alert, Text, View } from "react-native"

import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"

import Arrow from "@/components/arrow-back"
import Button from "@/components/button"
import { Input } from "@/components/input"

import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "@/services/firebaseConfig"

export default function ForgotPassword() {
	const [email, setEmail] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [submit, setSubmit] = useState(false)
	const [errors, setErrors] = useState({
		email: "",
	})

	async function handleForgotPassword() {
		setIsLoading(true)

		if (!email.trim()) {
			setErrors({ email: "Digite seu e-mail" })
			setIsLoading(false)
			return
		}

		try {
			await sendPasswordResetEmail(auth, email).then(() => {
				Alert.alert("Redefinir senha", `Instruções foram enviadas para o seu ${email}`, [
					{
						text: "OK",
						onPress: () => router.push("/login"),
					},
				])
			})
		} catch (error) {
			setErrors({
				email: "Não foi possível enviar o e-mail. Por favor, tente novamente.",
			})
			setIsLoading(false)
		} finally {
			setSubmit(false)
		}
	}

	useEffect(() => {
		if (submit) {
			handleForgotPassword()
		}
	}, [submit])

	return (
		<LinearGradient
			colors={["#DAD5FB", "#FFF"]}
			start={[0, 0]}
			end={[0, 1]}
			className="flex-1 p-6"
		>
			<View className="items-left mt-16">
				<Arrow onPress={() => router.back()} />
			</View>

			<View className="my-[30px]">
				<Text className="text-4xl font-medium tracking-tight leading-[44px]">Esqueceu Senha</Text>
			</View>

			<View className="gap-4 mb-8">
				<Text className="font-mediumj text-base">Por favor digite seu e-mail para receber as instruções.</Text>

				<Input
					hasError={!!errors.email}
					errorMessage={errors.email}
				>
					<Input.Field
						placeholder="Digite seu e-mail"
						value={email}
						onChangeText={(text) => {
							setEmail(text)
							setErrors({ email: "" })
						}}
					/>
				</Input>
			</View>

			<Button
				title="Enviar"
				onPress={() => setSubmit(true)}
				isLoading={isLoading}
			/>
		</LinearGradient>
	)
}
