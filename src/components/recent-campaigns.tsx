import React from "react"
import { View, Text, Pressable } from "react-native"
import { CAMPAIGNS_DATA } from "@/utils/data/campaigns"
import { useRouter } from "expo-router"

type Props1 = {
    children: React.ReactNode
}

function CampaignCard({ children }: Props1) {
    return (
        <View className="w-full px-[20] py-[15] border border-black-100/20 rounded-3xl items-center">
            {children}
        </View>
    )
}

function Content({ title }: { title: string }) {
    const campaign = CAMPAIGNS_DATA.find(campaign => campaign.title === title)

    return (
        <View className="w-full">
            <Text className="text-xl font-mediumj mb-10">{campaign?.title}</Text>

            <View className="flex-row justify-between mb-6">
                <Text className="text-lg font-mediumj">{campaign?.data[0].date}</Text>
                <Text className="text-lg font-mediumj">{campaign?.data[0].clicks}</Text>
            </View>
        </View>
    )

}


interface ButtonProps {
    id: number
}

const Button: React.FC<ButtonProps> = ({ id, ...rest }) => {
    const router = useRouter();
    return (
        <Pressable className="w-full h-[50px] px-[19px] py-[14px] bg-purple items-center justify-center rounded-full active:opacity-70" onPress={() => router.push(`/campaign/${id}`)} {...rest}>
            <Text className="text-black text-sm font-medium">Gerar análise</Text>
        </Pressable>
    );
}
CampaignCard.Content = Content
CampaignCard.Button = Button

export { CampaignCard }