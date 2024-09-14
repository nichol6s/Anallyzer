import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { SearchBar } from '@/components/search-bar'
import { CampaignCard } from '@/components/recent-campaigns'
import { Ionicons } from '@expo/vector-icons'
import { CAMPAIGNS_DATA, CampaignDataProps } from '@/utils/data/campaigns'

export default function Dashboard() {
    return (
        <LinearGradient
            colors={['#DAD5FB', '#FFF']}
            start={[0, 0]}
            end={[0, 0.45]}
            className="flex-1 p-6"
        >
            <View className="items-left mt-16 mb-6">
                <Text className="text-4xl font-mediumj w-[80%]">
                    Campanhas Recentes
                </Text>
            </View>

            <View className="mb-6">
                <SearchBar>
                    <Ionicons
                        name="search"
                        size={20}
                        color="#000"
                        style={{ opacity: 0.5 }}
                    />
                    <SearchBar.Field placeholder="Pesquisar..." />
                </SearchBar>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 12 }}
            >
                {CAMPAIGNS_DATA.map((campaign: CampaignDataProps) => (
                    <CampaignCard key={campaign.id}>
                        <CampaignCard.Content title={campaign.title} />
                        <CampaignCard.Button id={campaign.id} />
                    </CampaignCard>
                ))}
            </ScrollView>
        </LinearGradient>
    )
}
