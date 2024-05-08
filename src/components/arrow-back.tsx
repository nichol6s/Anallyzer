import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable, PressableProps } from 'react-native'

export default function Arrow({ ...rest }: PressableProps) {
    return (
        <Pressable className='w-16 h-16 items-center justify-center border border-black-200/20 rounded-full p-2 active:opacity-70' {...rest}>
            <AntDesign name="arrowleft" size={24} />
        </Pressable>
    )
}