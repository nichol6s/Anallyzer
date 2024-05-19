import { Pressable, Text, View, Alert } from 'react-native'
import { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

import Arrow from '@/components/arrow-back'
import Button from '@/components/button'
import Input from '@/components/input'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            signInWithEmailAndPassword(getAuth(), email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user)
                })
            Alert.alert("Sucesso", "Login realizado com sucesso.", [
                {
                    text: "OK",
                    onPress: () => router.push('/overview')
                }
            ])
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível fazer login. Por favor, tente novamente.")
        }
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
                <Text className='text-4xl font-medium tracking-tight leading-[44px]'>Login</Text>
            </View>

            <View className='gap-4 mb-5'>
                <Text className='font-medium'>Email</Text>

                <Input
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>

            <View className='gap-4 mb-3'>
                <Text className='font-medium'>Senha</Text>

                <Input
                    placeholder='Digite sua senha'
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>

            <View className='w-full items-end mb-9'>
                <Pressable onPress={() => router.push("/forgot-password")}>
                    <Text className='font-bold underline text-gray-200'> Esqueceu a senha?</Text>
                </Pressable>
            </View>

            <Button title='Login' onPress={() => handleLogin()} />

            <View className='flex-row justify-center mt-4'>
                <Text className='font-regular text-gray-200'>Ainda não possui uma conta? </Text>

                <Pressable onPress={() => router.push("/signup")}>
                    <Text className='font-bold underline text-gray-200'>Registrar-se</Text>
                </Pressable>
            </View>

        </LinearGradient>
    )
}

