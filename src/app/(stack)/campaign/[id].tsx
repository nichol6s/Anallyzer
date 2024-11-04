import React from "react"
import { View, Text, ScrollView } from "react-native"

import { useRouter, useLocalSearchParams } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"

import { Icons } from "@/components/icons"
import { Graph } from "@/components/graphs"
import { CAMPAIGNS_DATA, CampaignDataProps } from "@/utils/data/campaigns"

export default function Campaign() {
	const router = useRouter()
	const { id } = useLocalSearchParams()

	const campaign = CAMPAIGNS_DATA.find((campaign: CampaignDataProps) => campaign.id === Number(id))
	const { clicks, clicksFeedback, opens, opensFeedback, sends, sendsFeedback, leads, leadsFeedback, growth } =
		campaign?.data[0] || {}

	return (
		<LinearGradient
			colors={["#DAD5FB", "#FFF"]}
			start={[0, 0]}
			end={[0, 1]}
			className="flex-1 p-6"
		>
			<ScrollView
				className="px-2"
				showsVerticalScrollIndicator={false}
			>
				<View className="items-left mt-12 mb-6">
					<Icons.Arrow onPress={() => router.back()} />
				</View>

				<View className="items-left">
					<Text className="text-2xl font-mediumj">{campaign?.title}</Text>
				</View>

				<View className="mt-6 gap-4">
					<Graph.LargeGraph
						quantity={clicks ?? 0}
						title="Clicks"
						percentage={growth?.clicks.toString() ?? "0"}
					/>

					<Text className="text-sm font-light text-gray-200">{clicksFeedback}</Text>
				</View>

				<View className="mt-6 gap-4">
					<Graph.LargeGraph
						quantity={opens ?? 0}
						title="Aberturas"
						percentage={growth?.opens.toString() ?? "0"}
					/>

					<Text className="text-sm font-light text-gray-200"> {opensFeedback} </Text>
				</View>

				<View className="mt-6 gap-4">
					<Graph.LargeGraph
						quantity={sends ?? 0}
						title="Envios"
						percentage={growth?.sends.toString() ?? "0"}
					/>

					<Text className="text-sm font-light text-gray-200"> {sendsFeedback} </Text>
				</View>

				<View className="mt-6 gap-4">
					<Graph.LargeGraph
						quantity={leads ?? 0}
						title="Leads"
						percentage={growth?.leads.toString() ?? "0"}
					/>

					<Text className="text-sm font-light text-gray-200"> {leadsFeedback} </Text>
				</View>

				<View className="mt-6 gap-4">
					<Graph.CustomerGrowth />

					<Text className="text-sm font-light text-gray-200">
						O gráfico mostra um crescimento consistente ao longo dos 6 meses da campanha, com um aumento
						notável no número de clientes Homens. Isso é encorajador, pois indica que sua campanha está
						conseguindo atrair e reter eles.
					</Text>
				</View>
			</ScrollView>
		</LinearGradient>
	)
}
