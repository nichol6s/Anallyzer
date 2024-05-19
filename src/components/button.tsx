import { Text, Pressable, PressableProps, ActivityIndicator } from 'react-native'
import React from 'react'

type ButtonProps = PressableProps & {
    title: string
    isLoading?: boolean
}

export default function Button({ title, isLoading, ...rest }: ButtonProps) {
    return (
        <Pressable
            className='w-[344] h-[50] bg-purple items-center justify-center rounded-full active:opacity-70'
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator className='text-black-100' />
            ) : (
                <Text className='text-black text-base font-mediumj'>{title}</Text>
            )}
        </Pressable>
    )
}
