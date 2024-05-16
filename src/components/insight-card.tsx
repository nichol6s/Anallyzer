import React from "react";
import { View, Text, Pressable } from "react-native";

import { DETAILED_INSIGHTS } from "@/utils/data/insights";

export default function InsightCard() {
    const insight = DETAILED_INSIGHTS.find((item) => item.id);

    return (
        <Pressable className="w-[350] h-[265] px-[15] py-[20] rounded-3xl bg-transparent border border-black-100/20 items-start justify-start active:opacity-70">
            <View className="gap-2 mb-7">
                <Text className="text-base font-mediumj">{insight?.title}</Text>
                <Text className="text-xs font-mediumj opacity-50">{insight?.subcategory}</Text>
            </View>

            <View className="gap-4">
                <Text className="text-xs font-mediumj opacity-50">{insight?.date}</Text>
                <Text className="text-sm font-mediumj">{insight?.content1}</Text>
            </View>

        </Pressable>
    )
}