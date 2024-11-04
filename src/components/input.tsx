import { View, TextInput, TextInputProps, Text } from "react-native"
import { colors } from "@/styles/colors"

type InputProps = {
	children: React.ReactNode
	hasError?: boolean
	errorMessage?: string
	variant?: "default" | "large"
}

function Input({ children, hasError, errorMessage, variant = "default" }: InputProps) {
	const containerHeight = variant === "large" ? "h-[70px]" : "h-[50px]"
	const borderColor = hasError ? "border-red" : "border-gray-100"
	const textColor = hasError ? "text-red" : "text-black"

	return (
		<View className="mb-4">
			<View
				className={`w-full ${containerHeight} flex-row items-center gap-3 px-6 border ${borderColor} rounded-[16px]`}
			>
				{children}
			</View>
			{hasError && errorMessage ? <Text className={`mt-1 text-xs ${textColor}`}>{errorMessage}</Text> : null}
		</View>
	)
}

function Field({ ...rest }: TextInputProps) {
	return (
		<TextInput
			className="flex-1 text-black-100 text-sm font-light"
			placeholderTextColor={colors.black[100]}
			{...rest}
		/>
	)
}

Input.Field = Field
export { Input }
