import { useState, useEffect } from 'react'
import { Pressable, Text, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import Arrow from '@/components/arrow-back'
import Button from '@/components/button'
import { Input } from '@/components/input'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submit, setSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)

    async function handleLogin() {
        console.log("Email: ", email);
        console.log("Password: ", password);
        setIsLoading(true);
        try {
            if (!email.trim() || !password.trim()) {
                Alert.alert("Login", "Preencha todos os campos!");
                setSubmit(false);
                return;
            }
            const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
            const user = userCredential.user;
            console.log(user);

            Alert.alert("Sucesso", "Login realizado com sucesso.", [
                {
                    text: "OK",
                    onPress: () => router.push('/overview')
                }
            ]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            Alert.alert("Erro", "Não foi possível fazer login. Por favor, tente novamente.");
        } finally {
            setSubmit(false);
        }
    }

    useEffect(() => {
        if (submit) {
            handleLogin();
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

            <View className='my-[30px]'>
                <Text className='text-4xl font-medium tracking-tight leading-[44px]'>Login</Text>
            </View>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>

                <View className='gap-4 mb-5'>
                    <Text className='font-medium'>Email</Text>

                    <Input>
                        <Input.Field
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </Input>
                </View>

                <View className='gap-4 mb-3'>
                    <Text className='font-medium'>Senha</Text>

                    <Input>
                        <Input.Field
                            placeholder='Digite sua senha'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={!passwordVisible}
                        />
                        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Ionicons
                                name={passwordVisible ? 'eye' : 'eye-off'}
                                size={24}
                                color='#000'
                            />
                        </Pressable>
                    </Input>
                </View>

                <View className='w-full items-end mb-9'>
                    <Pressable onPress={() => router.push("/forgot-password")}>
                        <Text className='font-bold underline text-gray-200'> Esqueceu a senha?</Text>
                    </Pressable>
                </View>

                <Button title='Login' onPress={() => setSubmit(true)} isLoading={isLoading} />

                <View className='flex-row justify-center mt-4'>
                    <Text className='font-regular text-gray-200'>Ainda não possui uma conta? </Text>

                    <Pressable onPress={() => router.push("/signup")}>
                        <Text className='font-bold underline text-gray-200'>Registrar-se</Text>
                    </Pressable>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

