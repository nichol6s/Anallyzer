import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

import Arrow from '@/src/components/arrow-back'
import Button from '@/src/components/button'
export default function Login() {
    const router = useRouter()

    return (
        <LinearGradient
            colors={['#DAD5FB', '#FFF']}
            start={[0, 0]}
            end={[0, 1]}
            className="flex-1 p-6"
        >
            <View className='items-left mt-16'>
                <Arrow onPress={() => router.back()} />
            </View>
            <View className='my-[30px]'>
                <Text className='text-4xl font-medium tracking-tight leading-[44px]'>Login</Text>
            </View>
            <Button title='Login' />
            <View className='flex-row justify-center mt-4'>
                <Text className='font-regular text-gray-200'>Ainda não possui uma conta? </Text>
                <Pressable onPress={() => router.push("/signup")}>
                    <Text className='font-bold underline text-gray-200'>Registrar-se</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}

