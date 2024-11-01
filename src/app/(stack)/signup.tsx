import { useState, useEffect } from "react"
import { Pressable, Text, View, Alert } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"

import Arrow from "@/components/arrow-back"
import Button from "@/components/button"
import { Input } from "@/components/input"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "@/services/firebaseConfig"
import { doc, setDoc } from "firebase/firestore"

export default function Signup() {
	const router = useRouter()

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [submit, setSubmit] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
	})

	async function handleSignup() {
		setIsLoading(true)

		let newErrors = { name: "", email: "", password: "" }
		if (!name.trim()) newErrors.name = "Digite o nome da empresa"
		if (!email.trim()) newErrors.email = "Digite seu e-mail"
		if (!password.trim()) newErrors.password = "Digite uma senha"

		if (newErrors.name || newErrors.email || newErrors.password) {
			setErrors(newErrors)
			setIsLoading(false)
			return
		}

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			const user = userCredential.user

			await setDoc(doc(db, "users", user.uid), {
				name,
				email,
				category: "",
				location: "",
				employees: "",
				about: "",
				photoURL: "",
				createdAt: new Date().toISOString(),
			})

			router.push("/login")
		} catch (error) {
			console.log(error)
			setErrors((prev) => ({
				...prev,
				email: "Não foi possível criar a conta. Por favor, tente novamente.",
			}))
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (submit) {
			handleSignup()
			setSubmit(false)
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

			<View className="items-left mt-10">
				<Text className="text-4xl font-mediumj">Crie sua conta</Text>
			</View>

			<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
				<View className="items-left mt-10 gap-4 mb-4">
					<Text className="font-medium">Nome da empresa</Text>

					<Input
						hasError={!!errors.name}
						errorMessage={errors.name}
					>
						<Input.Field
							placeholder="Digite o nome da empresa"
							value={name}
							onChangeText={(text) => {
								setName(text)
								setErrors((prev) => ({ ...prev, name: "" }))
							}}
						/>
					</Input>
				</View>

				<View className="gap-4 mb-4">
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
							keyboardType="email-address"
						/>
					</Input>
				</View>

				<View className="gap-4 mb-12">
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
							secureTextEntry={true}
						/>
					</Input>
				</View>

				<Button
					title="Criar conta"
					onPress={() => setSubmit(true)}
					isLoading={isLoading}
				/>

				<View className="flex-row justify-center mt-4">
					<Text className="font-regular text-gray-200">Já possui uma conta? </Text>

					<Pressable onPress={() => router.push("/login")}>
						<Text className="font-bold underline text-gray-200">Login</Text>
					</Pressable>
				</View>
			</KeyboardAwareScrollView>
		</LinearGradient>
	)
}
