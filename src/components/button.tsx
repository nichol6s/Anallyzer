import { Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

type Props = PressableProps & {
    title: string
}

export default function Button({ title, ...rest }: Props) {
    return (
        <Pressable className='w-[344] h-[50] bg-[#BFB7FD] items-center justify-center rounded-full active:opacity-70' {...rest}>
            <Text className='text-black text-base font-mediumj'>{title}</Text>
        </Pressable>
    )
}
