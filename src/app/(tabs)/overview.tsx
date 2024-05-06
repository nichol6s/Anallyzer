import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Button from '@/src/components/button'
import { router } from 'expo-router'

export default function Overview() {
  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1"
    >
      <ScrollView>

        <View>
          <Text className='font-mediumj text-4xl'>Overview Page</Text>
        </View>

        <Button title='Go to Campaign' onPress={() => router.push("/signup")} />

      </ScrollView>
    </LinearGradient>

  )
}

