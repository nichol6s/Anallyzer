import { Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

type Props = PressableProps & {
    title: string
    onPress: () => void
}

export default function Button({ title, onPress, ...rest }: Props) {
    return (
        <Pressable className='w-[344] h-[50] bg-purple items-center justify-center rounded-full active:opacity-70' onPress={onPress} {...rest}>
            <Text className='text-black text-base font-mediumj'>{title}</Text>
        </Pressable>
    )
}
