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
                <View>
                    <Text className='text-3xl font-mediumj'> {insight.title} </Text>
                    <Text className='text-xl font-medium mb-4'> {insight.subtitle} </Text>
                </View>

                <View>
                    <Text className='text-sm font-mediumj'> {insight.content1} </Text>
                    <Text className='text-sm font-mediumj'> {insight.content2} </Text>
                </View>

            </ScrollView>

        </LinearGradient>
    )
}