import React from 'react'
import { Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { SearchBar } from '@/components/search-bar'
import { Ionicons } from '@expo/vector-icons'

export default function Dashboard() {
  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1 p-6"
    >

      <View className='items-left mt-16 mb-6'>
        <Text className='text-4xl font-mediumj w-[80%]'>Campanhas Recentes</Text>
      </View>

      <SearchBar>
        <Ionicons name='search' size={20} color='#000' style={{ opacity: 0.5 }} />
        <SearchBar.Field placeholder='Pesquisar...' />
      </SearchBar>

    </LinearGradient>
  )
}
