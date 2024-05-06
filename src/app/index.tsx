import React from 'react'
import { Text, View, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

import Button from '../components/button'

export default function Welcome() {
    return (
        <LinearGradient
            colors={['#DAD5FB', '#FFF']}
            start={[0, 0]}
            end={[0, 1]}
            className="flex-1"
        >
            <View className='items-center mt-16 mb-8'>
                <Image
                    source={require("../assets/Team.png")}
                    className="w-[344] h-[346]"
                />
            </View>
            <View className='items-left ml-10 mb-14 gap-10'>
                <Text className='text-4xl w-[80%] font-mediumj'>Seja bem-vindo ao Anallyzer</Text>

                <Text className='text-base font-regular'>Analise, preveja e aja para impulsionar vendas e lucros. Conecte-se à inteligência artificial e eleve seu negócio a outro patamar.</Text>
            </View>

            <View className='items-center gap-4'>
                <Button title='Junte-se a nós!' onPress={() => router.push("/signup")} />
                <Text className='font-regular text-gray-200'>Já possui uma conta? <Text className='font-bold underline' onPress={() => router.push("/login")}>Login</Text></Text>
            </View>

        </LinearGradient>
    )
}
