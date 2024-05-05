import React from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function Overview() {
  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="w-full h-full"
    >
      <Text className='text-red-400 mt-10'>Overview Page</Text>
    </LinearGradient>

  )
}

