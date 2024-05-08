import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

import Arrow from '@/src/components/arrow-back'

import { Input } from '@/src/components/input'

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

            <View className='items-left mt-10 gap-4'>
                <Text className='font-medium'>Nome da empresa</Text>

                <Input>
                    <Input.Field placeholder='Digite o nome da empresa' />
                </Input>
            </View>
        </LinearGradient>
    )
}

