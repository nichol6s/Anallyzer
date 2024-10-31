import { View, TextInput, TextInputProps } from "react-native"
import { colors } from "@/styles/colors"

type InputProps = {
	children: React.ReactNode
	variant?: "default" | "large"
}

function Input({ children, variant = "default" }: InputProps) {
	const containerHeight = variant === "large" ? "h-[70px]" : "h-[50px]"

	return (
		<View
			className={`w-full ${containerHeight} flex-row items-center gap-3 px-6 border border-gray-100 rounded-[16px]`}
		>
			{children}
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
