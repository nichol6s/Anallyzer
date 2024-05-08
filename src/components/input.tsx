import { TextInput, TextInputProps, View } from "react-native"

import { colors } from "../styles/colors"

function Input({ children }: { children: React.ReactNode }) {
    return (
        <View className="w-full h-14 flex-row items-center gap-3 pl-6 border border-gray-100 rounded-[16px]">
            {children}
        </View>
    )
}

function Field({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="flex-1 text-black-100 text-base font-light"
            placeholderTextColor={colors.black[100]}
            {...rest}
        />
    )
}

Input.Field = Field

export { Input }