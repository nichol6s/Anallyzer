import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { useRouter, useLocalSearchParams } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

import Arrow from '@/components/arrow-back'
import { INSIGHTS, } from '@/utils/data/insights'

export default function InsightDetail() {
    const router = useRouter()
    const { id } = useLocalSearchParams<{ id: string; }>()
    const insight = INSIGHTS.flatMap((category) => category.data).find((item) => item.id === id);

    if (!insight) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="text-lg font-medium">Insight não encontrado</Text>
            </View>
        );
    }

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


            <ScrollView className='items-left'>
                <View className='gap-2 mb-12'>
                    <Text className='text-3xl font-mediumj'> {insight.title} </Text>
                    <Text className='text-base font-medium opacity-50'> {insight.subtitle} </Text>
                </View>

                <View className='gap-7 text-left'>
                    <Text className='text-sm font-medium'> {insight.content1} </Text>
                    {insight.content2.map((item, index) => (
                        <View key={index} className="flex-row items-start">
                            <Text className="text-sm mr-2">•</Text>
                            <View className="flex-1">
                                <Text className="font-semibold text-sm">{item.title}</Text>
                                <Text className="text-sm">{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>

            </ScrollView>
        </LinearGradient>
    )
}