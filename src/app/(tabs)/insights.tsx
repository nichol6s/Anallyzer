import React, { useState } from "react";

import { ScrollView, Text, View, FlatList } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { SearchBar } from "@/components/search-bar";
import { colors } from "@/styles/colors";

import { CATEGORIES, INSIGHTS } from "@/utils/data/insights";
import { CategoryButton } from "@/components/category-button";
import InsightCard from "@/components/insight-card";

export default function Insights() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory)
  }

  const filteredInsights = INSIGHTS.find((item) => item.category === category)?.data || [];

  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 0.4]}
      className="flex-1 p-6"
    >
      <View className='items-left mt-16 mb-10'>
        <Text className='text-4xl font-medium tracking-tight leading-[44px]'>Insights</Text>
      </View>

      <SearchBar>
        <Ionicons name='search' size={20} color={colors.black[100]} style={{ opacity: 0.5 }} />
        <SearchBar.Field placeholder='Pesquisar...' />
      </SearchBar>

      <View className="mt-4 ml-4 mb-8">
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryButton
              title={item}
              isSelected={category === item}
              onPress={() => handleCategorySelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 20 }}>
        {filteredInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </ScrollView>
    </LinearGradient>
  )
}