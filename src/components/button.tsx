import { Text, View, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = TouchableOpacityProps & {
    title: string
}

export default function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity activeOpacity={0.7} {...rest}>
            <View className='w-[344] h-[50] bg-[#BFB7FD] items-center justify-center rounded-full' >
                <Text className='text-black text-base font-mediumj'>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
