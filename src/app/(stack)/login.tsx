import { useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"

import Arrow from "@/components/arrow-back"
import Button from "@/components/button"
import { Input } from "@/components/input"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function Login() {
	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [submit, setSubmit] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	})

	async function handleLogin() {
		setIsLoading(true)

		let newErrors = { email: "", password: "" }
		if (!email.trim()) newErrors.email = "Digite seu e-mail"
		if (!password.trim()) newErrors.password = "Digite sua senha"

		if (newErrors.email || newErrors.password) {
			setErrors(newErrors)
			setIsLoading(false)
			return
		}

		try {
			await signInWithEmailAndPassword(getAuth(), email, password)
			router.push("/overview")
		} catch (error) {
			setErrors((prev) => ({
				...prev,
				email: "E-mail ou senha incorretos. Por favor, tente novamente.",
			}))
			setIsLoading(false)
		} finally {
			setSubmit(false)
		}
	}

	useEffect(() => {
		if (submit) {
			handleLogin()
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
				<Text className="text-4xl font-medium tracking-tight leading-[44px]">Login</Text>
			</View>
			<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
				<View>
					<View className="gap-4 mb-5">
						<Text className="font-medium">Email</Text>

						<Input
							hasError={!!errors.email}
							errorMessage={errors.email}
						>
							<Input.Field
								placeholder="Digite seu e-mail"
								value={email}
								onChangeText={(text) => {
									setEmail(text)
									setErrors((prev) => ({ ...prev, email: "" }))
								}}
							/>
						</Input>
					</View>

					<View className="gap-4 mb-3">
						<Text className="font-medium">Senha</Text>

						<Input
							hasError={!!errors.password}
							errorMessage={errors.password}
						>
							<Input.Field
								placeholder="Digite sua senha"
								value={password}
								onChangeText={(text) => {
									setPassword(text)
									setErrors((prev) => ({ ...prev, password: "" }))
								}}
								secureTextEntry={!passwordVisible}
							/>
							<Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
								<Ionicons
									name={passwordVisible ? "eye" : "eye-off"}
									size={24}
									color="#000"
								/>
							</Pressable>
						</Input>
					</View>

					<View className="w-full items-end mb-9">
						<Pressable onPress={() => router.push("/forgot-password")}>
							<Text className="font-bold underline text-gray-200"> Esqueceu a senha?</Text>
						</Pressable>
					</View>

					<Button
						title="Login"
						onPress={() => setSubmit(true)}
						isLoading={isLoading}
					/>

					<View className="flex-row justify-center mt-4">
						<Text className="font-regular text-gray-200">Ainda não possui uma conta? </Text>

						<Pressable onPress={() => router.push("/signup")}>
							<Text className="font-bold underline text-gray-200">Registrar-se</Text>
						</Pressable>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</LinearGradient>
	)
}
