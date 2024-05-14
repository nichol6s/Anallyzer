import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { Graph } from '@/components/graphs'


export default function Overview() {
  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1 px-10 py-6"
    >
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>

        <View className='items-left gap-2 mb-6'>
          <Text className='font-mediumj text-4xl mt-16'>Overview</Text>
          <Text className='font-regular text-base text-gray-200'>Nesse ano <AntDesign name="caretdown" size={12} color="gray" /> </Text>
        </View>

        <View className='flex-row flex-wrap gap-3 '>

          <Graph.BasicGraph
            title='Cliques'
            percentage='+10%'
            quantity={88.438}
            valueLastYear={86.400}
          />
          <Graph.BasicGraph
            title='Aberturas'
            percentage='+12%'
            quantity={120.921}
            valueLastYear={107.500}
          />
          <Graph.BasicGraph
            title='Envios'
            percentage='-5%'
            quantity={201.769}
            valueLastYear={212.340}
          />
          <Graph.BasicGraph
            title='Leads'
            percentage='+3.5%'
            quantity={17.390}
            valueLastYear={16.800}
          />

        </View>

        <View className='align-center mt-6'>
          <Graph.SalesFigures />
        </View>

      </ScrollView>
    </LinearGradient>

  )
}

