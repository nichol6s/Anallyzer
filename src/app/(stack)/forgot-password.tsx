import Arrow from '@/src/components/arrow-back'
import Button from '@/src/components/button'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function forgotPassword() {
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
                <Text className='text-4xl font-medium tracking-tight leading-[44px]'>Esqueceu Senha</Text>
            </View>
            <Button title='Enviar' />
        </LinearGradient>
    )
}