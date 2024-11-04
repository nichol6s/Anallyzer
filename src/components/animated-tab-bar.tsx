import React from "react"
import { View, Pressable } from "react-native"
import { Octicons, Feather, Entypo } from "@expo/vector-icons"
import Animated, { useAnimatedStyle, withSpring, useSharedValue, withSequence } from "react-native-reanimated"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"

type RouteName = "overview" | "dashboard" | "insights" | "profile"

export function AnimatedTabBar({ state, navigation }: BottomTabBarProps) {
	const animatedScales = state.routes.map(() => useSharedValue(1))

	const getIcon = (routeName: string, isFocused: boolean) => {
		const size = 22
		const color = isFocused ? "#000000" : "#666666"

		switch (routeName as RouteName) {
			case "overview":
				return (
					<Octicons
						name="home"
						size={size}
						color={color}
					/>
				)
			case "dashboard":
				return (
					<Feather
						name="pie-chart"
						size={size}
						color={color}
					/>
				)
			case "insights":
				return (
					<Entypo
						name="light-bulb"
						size={size}
						color={color}
					/>
				)
			case "profile":
				return (
					<Feather
						name="user"
						size={size}
						color={color}
					/>
				)
			default:
				return null
		}
	}

	return (
		<View className="absolute bottom-0 left-0 right-0 h-16 flex-row bg-white/100">
			{state.routes.map((route, index) => {
				const isFocused = state.index === index

				const animatedStyle = useAnimatedStyle(() => {
					return {
						transform: [{ scale: animatedScales[index].value }],
					}
				})

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					})

					if (!event.defaultPrevented) {
						navigation.navigate(route.name)
					}

					animatedScales[index].value = withSequence(
						withSpring(1.15, {
							mass: 0.5,
							damping: 8,
							stiffness: 100,
						}),
						withSpring(1, {
							mass: 0.5,
							damping: 8,
							stiffness: 100,
						})
					)
				}

				return (
					<Pressable
						key={index}
						onPress={onPress}
						className="flex-1 items-center justify-center"
					>
						<Animated.View style={animatedStyle}>{getIcon(route.name, isFocused)}</Animated.View>
					</Pressable>
				)
			})}
		</View>
	)
}
