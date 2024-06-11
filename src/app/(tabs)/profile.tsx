import React from "react"
import { View, Text, Image } from "react-native"

import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons"

import AvatarImage from "@/components/avatar"

export default function Profile() {
    return (
        <LinearGradient
            colors={['#DAD5FB', '#FFF']}
            start={[0, 0]}
            end={[0, 0.7]}
            className="flex-1 py-8"
        >

            <View className="w-full">
                <Image className="w-full " source={require("@/assets/profile-cover.png")} />
                {/* <LinearGradient
                    colors={['#DAD5Fb', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    className="w-full h-52 absolute top-0"
                /> */}
            </View>

            <View className="w-full px-9">
                <View className="-mt-12 mb-4">
                    <AvatarImage />
                </View>

                <View className="w-full items-left gap-3 mb-11">
                    <Text className="font-semibold text-lg">Plusfot, Inc</Text>
                    <Text className="font-regular text-sm text-gray-200">Informação Tecnologia e Serviços</Text>

                    <View className="flex-row gap-5">
                        <Text className="font-regular text-sm gap-1">
                            <MaterialCommunityIcons name="office-building-marker" size={16} color="gray" />  São Paulo, BR
                        </Text>

                        <Text className="font-regular text-sm">
                            <Octicons name="people" size={16} color="gray" />  5000 + Funcionários
                        </Text>
                    </View>
                </View>

                <View className="w-full gap-4">
                    <Text className="font-semibold text-base">Sobre a empresa</Text>
                    <Text className="font-regular text-base">
                        A Plusoft é uma das maiores empresas de human experience (HX). Somos especialistas na fabricação, desenvolvimento e na implementação de softwares Omnichannel de Customer Relationship Management (CRM) para todos os mercados. Com mais de 30 anos de atuação, somos a primeira companhia nacional do segmento a conquistar a certificação internacional ISO 27001:2013, concedida a organizações com elevado nível de qualidade e segurança no desenvolvimento dos seus projetos.
                    </Text>
                </View>
            </View>
        </LinearGradient>
    )
}