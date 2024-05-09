import React from 'react'
import { Alert, Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

import Arrow from '@/components/arrow-back'
import Button from '@/components/button'
import { Input } from '@/components/input'

export default function forgotPassword() {
    function sendVerification() {
        Alert.alert("Redefinir senha", "Instruções foram enviadas para o seu e-mail!")
    }

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

            <View className='gap-4 mb-8'>
                <Text className='font-medium'>Por favor digite seu e-mail para receber
                    um código de verificação.</Text>
                <Input>
                    <Input.Field placeholder='Digite seu e-mail' />
                </Input>
            </View>

            <Button title='Enviar' onPress={sendVerification} />
        </LinearGradient>
    )
}