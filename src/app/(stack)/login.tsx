import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

import Arrow from '@/components/arrow-back'
import Button from '@/components/button'
import { Input } from '@/components/input'
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
            <View className='gap-4 mb-5'>
                <Text className='font-medium'>Email</Text>
                <Input>
                    <Input.Field placeholder='Digite seu email' />
                </Input>
            </View>
            <View className='gap-4 mb-3'>
                <Text className='font-medium'>Senha</Text>
                <Input>
                    <Input.Field placeholder='Digite sua senha' />
                </Input>
            </View>
            <View className='w-full items-end mb-9'>
                <Pressable onPress={() => router.push("/forgot-password")}>
                    <Text className='font-bold underline text-gray-200'> Esqueceu a senha?</Text>
                </Pressable>
            </View>
            <Button title='Login' onPress={() => router.push("/overview")} />
            <View className='flex-row justify-center mt-4'>
                <Text className='font-regular text-gray-200'>Ainda não possui uma conta? </Text>
                <Pressable onPress={() => router.push("/signup")}>
                    <Text className='font-bold underline text-gray-200'>Registrar-se</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}

