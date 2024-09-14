import { useState, useEffect } from 'react'
import { Pressable, Text, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

import Arrow from '@/components/arrow-back'
import Button from '@/components/button'
import { Input } from '@/components/input'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/services/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function Signup() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function handleSignup() {
        console.log("Handle Signup called!")
        setIsLoading(true)
        try {
            if (!name.trim() || !email.trim() || !password.trim()) {
                Alert.alert("Inscrição", "Preencha todos os campos!")
                setSubmit(false)
                setIsLoading(false)
                return
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            await setDoc(doc(db, 'users', user.uid), {
                name,
                email
            })
            console.log(user)

            setIsLoading(false)

            Alert.alert("Sucesso", "Conta criada com sucesso.", [
                {
                    text: "OK",
                    onPress: () => router.push('/login')
                }
            ])
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            Alert.alert("Erro", "Não foi possível criar a conta. Por favor, tente novamente.")
        } finally {
            setSubmit(false)
        }

    }

    useEffect(() => {
        if (submit) {
            handleSignup()
            setSubmit(false)
        }
    }, [submit])

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

            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >

                <View className='items-left mt-10 gap-4 mb-4'>
                    <Text className='font-medium'>Nome da empresa</Text>

                    <Input>
                        <Input.Field
                            placeholder='Digite o nome da empresa'
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </Input>
                </View>

                <View className='gap-4 mb-4'>
                    <Text className='font-medium'>Email</Text>

                    <Input>
                        <Input.Field
                            placeholder='Digite seu e-mail'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType='email-address'
                        />
                    </Input>
                </View>

                <View className='gap-4 mb-12'>
                    <Text className='font-medium'>Senha</Text>

                    <Input>
                        <Input.Field
                            placeholder='Digite sua senha'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        />
                    </Input>
                </View>

                <Button title='Criar conta' onPress={() => setSubmit(true)} isLoading={isLoading} />

                <View className='flex-row justify-center mt-4'>
                    <Text className='font-regular text-gray-200'>Já possui uma conta? </Text>

                    <Pressable onPress={() => router.push("/login")}>
                        <Text className='font-bold underline text-gray-200'>Login</Text>
                    </Pressable>
                </View>
            </KeyboardAwareScrollView>

        </LinearGradient>
    )
}

