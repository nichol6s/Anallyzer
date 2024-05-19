import { TextInput, TextInputProps } from "react-native"

import { colors } from "../styles/colors"

// function Input({ children }: { children: React.ReactNode }) {
//     return (
//         <View className="w-full h-[50px] flex-row items-center gap-3 pl-6 border border-gray-100 rounded-[16px]">
//             {children}
//         </View>
//     )
// }

// function Field({ ...rest }: TextInputProps) {
//     return (
//         <TextInput
//             className="flex-1 text-black-100 text-sm font-light"
//             placeholderTextColor={colors.black[100]}
//             {...rest}
//         />
//     )
// }

// Input.Field = Field

// export { Input }

export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="w-full h-[50] pl-6 border border-gray-100 rounded-[16px] text-black-100 text-sm font-light"
            placeholderTextColor={colors.black[100]}
            {...rest}
        />
    )
}