import React from 'react'
import { View, Text } from 'react-native'

import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import Arrow from '@/components/arrow-back'


export default function DetailedInsights() {
    const router = useRouter()

    return (
        <LinearGradient
            colors={['#DAD5FB', '#FFF']}
            start={[0, 0]}
            end={[0, 1]}
            className="flex-1 p-6"
        >
            <View className='items-left mt-12 mb-6'>
                <Arrow onPress={() => router.back()} />
            </View>

            <View className='items-left'>
                <Text className='text-black text-2xl font-mediumj'>Novidades da Semana: Camp...</Text>
            </View>
        </LinearGradient>
    )
}