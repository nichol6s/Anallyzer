import { Pressable, Text, View, Alert } from 'react-native'
import { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

import Arrow from '@/components/arrow-back'
import Button from '@/components/button'
import { Input } from '@/components/input'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db, doc, setDoc } from '@/services/firebase'

export default function Signup() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Após a criação do usuário, armazena o nome no Firestore
            await setDoc(doc(db, "users", user.uid), {
                name,
            });

            // Limpa os campos e redireciona para a tela de login
            setName("");
            setEmail("");
            setPassword("");
            router.push('/login');
        } catch (error) {
            console.error(error)
            Alert.alert('Erro', 'Não foi possível criar a conta. Por favor, tente novamente.');
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

            <View className='items-left mt-10'>
                <Text className='text-4xl font-mediumj'>Crie sua conta</Text>
            </View>

            <View className='items-left mt-10 gap-4 mb-4'>
                <Text className='font-medium'>Nome da empresa</Text>

                <Input>
                    <Input.Field
                        placeholder='Digite o nome da empresa'
                        value={name}
                        onChangeText={(value) => setName(value)}
                    />
                </Input>
            </View>

            <View className='gap-4 mb-4'>
                <Text className='font-medium'>Email</Text>
                <Input>
                    <Input.Field
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                </Input>
            </View>

            <View className='gap-4 mb-12'>
                <Text className='font-medium'>Senha</Text>
                <Input>
                    <Input.Field
                        placeholder='Digite sua senha'
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        textContentType='password'
                    />
                </Input>
            </View>

            <Button title='Criar conta' onPress={() => handleSignup()} />

            <View className='flex-row justify-center mt-4'>
                <Text className='font-regular text-gray-200'>Já possui uma conta? </Text>

                <Pressable onPress={() => router.push("/login")}>
                    <Text className='font-bold underline text-gray-200'>Login</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}

