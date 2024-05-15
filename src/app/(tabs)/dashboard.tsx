import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'

import { LinearGradient } from 'expo-linear-gradient'
import { SearchBar } from '@/components/search-bar'
import { CampaignCard } from '@/components/recent-campaigns'
import { Ionicons } from '@expo/vector-icons'

export default function Dashboard() {
  const router = useRouter()

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

      <View className='mb-6'>
        <SearchBar>
          <Ionicons name='search' size={20} color='#000' style={{ opacity: 0.5 }} />
          <SearchBar.Field placeholder='Pesquisar...' />
        </SearchBar>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
        <CampaignCard>
          <CampaignCard.Content
            title='Novidades da semana: Campanh...'
            date='12 Dez, 2023'
            clicks={33.889}
          />
          <CampaignCard.Button title='Gerar análise' onPress={() => router.push("/campaign")} />
        </CampaignCard>

        <CampaignCard>
          <CampaignCard.Content
            title='Cupons Exclusivos: Aproveit...'
            date='19 Ago, 2016'
            clicks={31.889}
          />
          <CampaignCard.Button title='Gerar análise' />
        </CampaignCard>

        <CampaignCard>
          <CampaignCard.Content
            title='Super oferta: 70% de descont...'
            date='26 Mai, 2021'
            clicks={22.489}
          />
          <CampaignCard.Button title='Gerar análise' />
        </CampaignCard>

        <CampaignCard>
          <CampaignCard.Content
            title='Black Friday chegando: Prepar...'
            date='22 Set, 2022'
            clicks={13.889}
          />
          <CampaignCard.Button title='Gerar análise' />
        </CampaignCard>

      </ScrollView>

    </LinearGradient>
  )
}
