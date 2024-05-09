import React from "react"
import { View, Text, Pressable, PressableProps } from "react-native"

type Props1 = {
    children: React.ReactNode
}

type Props2 = {
    title: string,
    date: string,
    clicks: number,
}

type Props3 = PressableProps & {
    title: string
}

function CampaignCard({ children }: Props1) {

    return (
        <View className="w-full px-[20] py-[15] border border-black-100/20 rounded-3xl items-center">
            {children}
        </View>
    )
}

function Content({ title, date, clicks }: Props2) {
    return (
        <View>
            <Text className="text-xl font-mediumj mb-10">{title}</Text>

            <View className="flex-row justify-between mb-6">
                <Text className="text-lg font-mediumj">{date}</Text>
                <Text className="text-lg font-mediumj">{clicks}</Text>
            </View>
        </View>
    )

}

function Button({ title, ...rest }: Props3) {
    return (
        <Pressable className="w-full h-[50] px-[19] py-[14] bg-purple items-center justify-center rounded-full active:opacity-70" {...rest} >
            <Text className="text-black text-sm font-mediumj"> {title} </Text>
        </Pressable>
    )
}

CampaignCard.Content = Content
CampaignCard.Button = Button

export { CampaignCard }