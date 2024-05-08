import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'


import Arrow from '@/components/arrow-back'
import Button from '@/components/button'
import { Input } from '@/components/input'

export default function Signup() {
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

            <View className='items-left mt-10'>
                <Text className='text-4xl font-mediumj'>Crie sua conta</Text>
            </View>

            <View className='items-left mt-10 gap-4 mb-4'>
                <Text className='font-medium'>Nome da empresa</Text>

                <Input>
                    <Input.Field placeholder='Digite o nome da empresa' />
                </Input>
            </View>

            <View className='gap-4 mb-4'>
                <Text className='font-medium'>Email</Text>
                <Input>
                    <Input.Field placeholder='Digite seu e-mail' />
                </Input>
            </View>

            <View className='gap-4 mb-12'>
                <Text className='font-medium'>Senha</Text>
                <Input>
                    <Input.Field placeholder='Digite sua senha' />
                </Input>
            </View>

            <Button title='Criar conta' onPress={() => router.push("/login")} />

            <View className='flex-row justify-center mt-4'>
                <Text className='font-regular text-gray-200'>Já possui uma conta? </Text>
                <Pressable onPress={() => router.push("/login")}>
                    <Text className='font-bold underline text-gray-200'>Login</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}

