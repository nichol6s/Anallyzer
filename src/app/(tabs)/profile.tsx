import React, { useState, useEffect } from "react"
import { View, Text, Image, Pressable, Alert, TextInput, Modal } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons, Octicons, Feather, AntDesign } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage, db } from "@/services/firebaseConfig"

import AvatarImage from "@/components/avatar"
import Button from "@/components/button"
import { Input } from "@/components/input"

const EMPLOYEE_OPTIONS = [
	"1 - 50 funcionários",
	"50 - 100 funcionários",
	"100 - 1000 funcionários",
	"1000 - 5000 funcionários",
	"Mais de 5000 funcionários",
]
interface CompanyData {
	name: string
	category: string
	location: string
	employees: string
	about: string
	photoURL: string
}

export default function Profile() {
	const [companyData, setCompanyData] = useState<CompanyData>({
		name: "",
		category: "",
		location: "",
		employees: "",
		about: "",
		photoURL: "",
	})

	const [editingCategory, setEditingCategory] = useState(false)
	const [editingAbout, setEditingAbout] = useState(false)
	const [showEmployeesModal, setShowEmployeesModal] = useState(false)
	const [editingLocation, setEditingLocation] = useState(false)
	const [loading, setLoading] = useState(false)
	const [tempCategory, setTempCategory] = useState("")
	const [tempAbout, setTempAbout] = useState("")
	const [tempLocation, setTempLocation] = useState("")

	const auth = getAuth()
	const user = auth.currentUser

	useEffect(() => {
		fetchUserData()
	}, [])

	const fetchUserData = async () => {
		if (!user) return
		try {
			const userDoc = await getDoc(doc(db, "users", user.uid))
			if (userDoc.exists()) {
				setCompanyData(userDoc.data() as CompanyData)
			}
		} catch (error) {
			console.error("Error fetching user data:", error)
			Alert.alert("Erro", "Não foi possível carregar os dados do usuário.")
		}
	}

	const handleImagePicker = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1, 1],
				quality: 1,
			})

			if (!result.canceled) {
				setLoading(true)
				const response = await fetch(result.assets[0].uri)
				const blob = await response.blob()

				const storageRef = ref(storage, `profile-photos/${user?.uid}`)
				await uploadBytes(storageRef, blob)

				const photoURL = await getDownloadURL(storageRef)

				await updateDoc(doc(db, "users", user!.uid), {
					photoURL,
				})

				setCompanyData((prev) => ({ ...prev, photoURL }))
				setLoading(false)
			}
		} catch (error) {
			console.error("Error uploading image:", error)
			Alert.alert("Erro", "Não foi possível fazer upload da imagem.")
			setLoading(false)
		}
	}

	const updateField = async (field: string, value: string) => {
		if (!user) return
		try {
			setLoading(true)
			await updateDoc(doc(db, "users", user.uid), {
				[field]: value,
			})
			setCompanyData((prev) => ({ ...prev, [field]: value }))
		} catch (error) {
			console.error("Error updating field:", error)
			Alert.alert("Erro", "Não foi possível atualizar o campo.")
		} finally {
			setLoading(false)
		}
	}

	return (
		<LinearGradient
			colors={["#DAD5FB", "#FFF"]}
			start={[0, 0]}
			end={[0, 0.4]}
			className="flex-1 py-8"
		>
			<View className="w-full">
				<Image
					className="w-full"
					source={require("@/assets/profile-cover.png")}
				/>
			</View>

			<View className="w-full px-9">
				<Pressable
					className="-mt-12 mb-4"
					onPress={handleImagePicker}
				>
					<AvatarImage uri={companyData.photoURL} />
				</Pressable>

				<View className="w-full items-left gap-3 mb-11">
					<Text className="font-semibold text-lg">{companyData.name}</Text>

					{/* Categoria */}
					<Pressable
						onPress={() => {
							setEditingCategory(true)
							setTempCategory(companyData.category)
						}}
					>
						{companyData.category ? (
							<View className="flex-row items-center gap-2">
								<Text className="font-regular text-sm text-gray-200">{companyData.category}</Text>
							</View>
						) : (
							<Text className="font-regular text-sm text-gray-400">
								<AntDesign
									name="plus"
									size={16}
								/>{" "}
								Adicionar a Categoria da empresa
							</Text>
						)}
					</Pressable>

					<View className="flex-row gap-5">
						{/* Localização */}
						{companyData.location ? (
							<Text className="font-regular text-sm">
								<MaterialCommunityIcons
									name="office-building-marker"
									size={16}
									color="gray"
								/>{" "}
								{companyData.location}
							</Text>
						) : (
							<Pressable onPress={() => setEditingLocation(true)}>
								<Text className="font-regular text-sm text-gray-400">
									<MaterialCommunityIcons
										name="office-building-marker"
										size={16}
										color="gray"
									/>{" "}
									Adicionar local
								</Text>
							</Pressable>
						)}

						{/* Funcionários */}
						{companyData.employees ? (
							<Text className="font-regular text-sm">
								<Octicons
									name="people"
									size={16}
									color="gray"
								/>{" "}
								{companyData.employees}
							</Text>
						) : (
							<Pressable onPress={() => setShowEmployeesModal(true)}>
								<Text className="font-regular text-sm text-gray-400">
									<Octicons
										name="people"
										size={16}
										color="gray"
									/>{" "}
									Adicionar funcionários
								</Text>
							</Pressable>
						)}
					</View>
				</View>

				{/* Sobre a empresa */}
				<View className="w-full gap-4">
					<View className="flex-row items-center gap-2">
						<Text className="font-semibold text-base">Sobre a empresa</Text>
						<Pressable
							onPress={() => {
								setEditingAbout(true)
								setTempAbout(companyData.about)
							}}
						>
							<Feather
								name="edit-2"
								size={16}
								color="gray"
							/>
						</Pressable>
					</View>

					{companyData.about ? (
						<Text className="font-regular text-base">{companyData.about}</Text>
					) : (
						<Pressable onPress={() => setEditingAbout(true)}>
							<Text className="font-regular text-base text-gray-400">
								Adicione uma breve descrição da empresa
							</Text>
						</Pressable>
					)}
				</View>
			</View>

			{/* Modal para edição da categoria */}
			<Modal
				visible={editingCategory}
				transparent
				animationType="slide"
			>
				<View className="flex-1 justify-end">
					<View className="bg-white p-4 rounded-t-3xl">
						<View className="flex-row justify-between">
							<Text className="font-semibold text-lg mb-4">Categoria da empresa</Text>
							<Pressable
								className="active:opacity-70"
								onPress={() => setEditingCategory(false)}
							>
								<AntDesign
									name="close"
									size={24}
									color="black"
								/>
							</Pressable>
						</View>
						<Input>
							<Input.Field
								value={tempCategory}
								onChangeText={setTempCategory}
								placeholder="Digite a categoria"
								onSubmitEditing={() => {
									updateField("category", tempCategory)
									setEditingCategory(false)
								}}
							/>
						</Input>
					</View>
				</View>
			</Modal>

			{/* Modal para edição da localização */}
			<Modal
				visible={editingLocation}
				transparent
				animationType="slide"
			>
				<View className="flex-1 justify-end">
					<View className="bg-white p-4 rounded-t-3xl">
						<View className="flex-row justify-between">
							<Text className="font-semibold text-lg mb-4">Localização da Empresa</Text>
							<Pressable
								className="active:opacity-70"
								onPress={() => setEditingLocation(false)}
							>
								<AntDesign
									name="close"
									size={24}
									color="black"
								/>
							</Pressable>
						</View>
						<Input>
							<Input.Field
								value={tempLocation}
								onChangeText={setTempLocation}
								placeholder="Digite a categoria"
								onSubmitEditing={() => {
									updateField("location", tempLocation)
									setEditingLocation(false)
								}}
							/>
						</Input>
					</View>
				</View>
			</Modal>

			{/* Modal para seleção de funcionários */}
			<Modal
				visible={showEmployeesModal}
				transparent
				animationType="slide"
			>
				<View className="flex-1 justify-end">
					<View className="bg-white p-4 rounded-t-3xl">
						<View className="flex-row justify-between">
							<Text className="font-semibold text-lg mb-4">Número de funcionários</Text>
							<Pressable
								className="active:opacity-70"
								onPress={() => setShowEmployeesModal(false)}
							>
								<AntDesign
									name="close"
									size={24}
									color="black"
								/>
							</Pressable>
						</View>
						{EMPLOYEE_OPTIONS.map((option) => (
							<Pressable
								key={option}
								className="py-4 border-b border-gray-200"
								onPress={() => {
									updateField("employees", option)
									setShowEmployeesModal(false)
								}}
							>
								<Text>{option}</Text>
							</Pressable>
						))}
					</View>
				</View>
			</Modal>

			{/* Modal para edição do sobre */}
			<Modal
				visible={editingAbout}
				transparent
				animationType="slide"
			>
				<View className="flex-1 justify-end">
					<View className="bg-white p-4 rounded-t-3xl">
						<View className="flex-row justify-between">
							<Text className="font-semibold text-lg mb-4">Sobre a empresa</Text>
							<Pressable
								className="active:opacity-70"
								onPress={() => setEditingAbout(false)}
							>
								<AntDesign
									name="close"
									size={24}
									color="black"
								/>
							</Pressable>
						</View>
						<Input>
							<Input.Field
								value={tempAbout}
								onChangeText={setTempAbout}
								placeholder="Digite uma breve descrição"
								maxLength={600}
								numberOfLines={8}
								onSubmitEditing={() => {
									updateField("about", tempAbout)
									setEditingAbout(false)
								}}
							/>
						</Input>
					</View>
				</View>
			</Modal>
		</LinearGradient>
	)
}
