import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

import Arrow from '@/src/components/arrow-back'
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
            <View className=''>
                <Text>login</Text>
            </View>
        </LinearGradient>
    )
}

