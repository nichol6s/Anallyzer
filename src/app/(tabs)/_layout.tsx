import { AnimatedTabBar } from "@/components/animated-tab-bar"
import { Tabs } from "expo-router"

import React from "react"

// prettier-ignore
export default function TabsLayout() {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
        tabBar={(props) => <AnimatedTabBar {...props} />}
      >
        <Tabs.Screen name="overview" />
        <Tabs.Screen name="dashboard" />
        <Tabs.Screen name="insights" />
        <Tabs.Screen name="profile" />
      </Tabs>
    );
  }
