import React from 'react'
import { Pressable, PressableProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Arrow({ ...rest }: PressableProps) {
    return (
        <Pressable className='w-16 h-16 items-center justify-center border border-black-200/50 rounded-full p-2 active:opacity-70' {...rest}>
            <AntDesign name="arrowleft" size={24} />
        </Pressable>
    )
}