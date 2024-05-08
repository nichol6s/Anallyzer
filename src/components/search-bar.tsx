import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { colors } from '../styles/colors'

function SearchBar({ children }: { children: React.ReactNode }) {
    return (
        <View className="w-full h-14 flex-row items-center gap-3 pl-8 border border-gray-100 rounded-full">
            {children}
        </View>
    )
}

function Field({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="flex-1 text-black-100 text-md font-light"
            placeholderTextColor={colors.black[100]}
            {...rest}
        />

    )
}

SearchBar.Field = Field

export { SearchBar }

