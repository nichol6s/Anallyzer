import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { BasicGraph } from '@/components/graphs'


export default function Overview() {
  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1 p-6"
    >
      <ScrollView>

        <View className='items-left gap-2 mb-6'>
          <Text className='font-mediumj text-4xl mt-16'>Overview</Text>
          <Text className='font-regular text-base text-gray-200'>Show: Nesse ano</Text>
        </View>

        <View className='flex-row flex-wrap gap-3 '>

          <BasicGraph />
          <BasicGraph />
          <BasicGraph />
          <BasicGraph />

        </View>

      </ScrollView>
    </LinearGradient>

  )
}

