import { View, TextInput, TextInputProps } from "react-native"
import { colors } from "@/styles/colors"

function Input({ children }: { children: React.ReactNode }) {
	return (
		<View className="w-full h-[80] flex-row items-center gap-3 px-6 border border-gray-100 rounded-[16]">
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
