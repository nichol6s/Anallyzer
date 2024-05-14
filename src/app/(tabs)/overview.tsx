import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
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
          <Text className='font-regular text-base text-gray-200'>Nesse ano <AntDesign name="caretdown" size={12} color="gray" /> </Text>
        </View>

        <View className='flex-row flex-wrap gap-3 '>

          <BasicGraph
            title='Cliques'
            percentage='+10%'
            quantity={88.438}
            valueLastYear={86.400}
          />
          <BasicGraph
            title='Aberturas'
            percentage='+12%'
            quantity={120.921}
            valueLastYear={107.500}
          />
          <BasicGraph
            title='Envios'
            percentage='-5%'
            quantity={201.769}
            valueLastYear={212.340}
          />
          <BasicGraph
            title='Leads'
            percentage='+3.5%'
            quantity={17.390}
            valueLastYear={16.800}
          />

        </View>

      </ScrollView>
    </LinearGradient>

  )
}

