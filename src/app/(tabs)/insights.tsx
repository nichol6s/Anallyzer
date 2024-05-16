import React, { useState } from "react";

import { ScrollView, Text, View, FlatList, SectionList } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { SearchBar } from "@/components/search-bar";
import { colors } from "@/styles/colors";

import { CATEGORIES, INSIGHTS, InsightsProps } from "@/utils/data/insights";
import { CategoryButton } from "@/components/category-button";

export default function Insights() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory)

  }

  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1 p-6"
    >
      <View className='items-left mt-16 mb-10'>
        <Text className='text-4xl font-medium tracking-tight leading-[44px]'>Insights</Text>
      </View>

      <SearchBar>
        <Ionicons name='search' size={20} color={colors.black[100]} style={{ opacity: 0.5 }} />
        <SearchBar.Field placeholder='Pesquisar...' />
      </SearchBar>

      <View className="mt-4 ml-4">

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



        {/* <SectionList 
          sections={INSIGHTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            
          )}
          showsVerticalScrollIndicator={false}
        /> */}

      </View>

      <ScrollView>
      </ScrollView>
    </LinearGradient>
  )
}