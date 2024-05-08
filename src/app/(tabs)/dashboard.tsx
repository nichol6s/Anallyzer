import React from 'react'
import { Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

export default function Dashboard() {
  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1 p-6"
    >

      <View className='flex w-full mt-40'>
        <Text className='text-green-700'>Dashboard Page</Text>
      </View>

    </LinearGradient>
  )
}
