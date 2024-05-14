import React from "react"
import { View, Text } from "react-native"

import { AntDesign } from "@expo/vector-icons"
import { colors } from "@/styles/colors"

import SalesFigureSvg from "@/assets/Graphs/SalesFigures.svg"
import HitRateSvg from "@/assets/Graphs/HitRate.svg"
import AllVisitorSvg from "@/assets/Graphs/AllVisitor.svg"
import SalesReportSvg from "@/assets/Graphs/SalesReport.svg"
import PlatformVisitorSvg from "@/assets/Graphs/PlatformVisitor.svg"
import TopSalesLocationsSvg from "@/assets/Graphs/TopSalesLocations.svg"

type BasicGraphProps = {
    title: string
    percentage?: string
    quantity: number
    valueLastYear: number
}

function BasicGraph({ title, percentage, quantity, valueLastYear }: BasicGraphProps) {
    return (
        <View className=" w-[145] h-36 p-4 rounded-3xl bg-white">

            <View className="flex-row gap-2">
                <Text className="font-semibold text-sm">{title}</Text>

                {percentage && (
                    <Text className={`font-semibold text-sm ${percentage.includes('+') ? 'text-green' : 'text-red'}`}>
                        {percentage}
                        <AntDesign name={percentage.includes('+') ? "arrowup" : "arrowdown"} size={12} color={percentage.includes('+') ? colors.green : colors.red} />
                    </Text>
                )}
            </View>

            <Text className="font-semibold text-2xl mt-2">{quantity}</Text>

            <Text className="font-regular text-gray-200 text-xs mt-2">Comparado com {valueLastYear} ano passado</Text>
        </View>
    )
}

function SalesFigures() {
    return <SalesFigureSvg />
}

function HitRate() {
    return <HitRateSvg />
}

function AllVisitor() {
    return <AllVisitorSvg />
}

function SalesReport() {
    return <SalesReportSvg />
}

function PlatformVisitor() {
    return <PlatformVisitorSvg />
}

function TopSalesLocations() {
    return <TopSalesLocationsSvg />
}

const Graph = {
    BasicGraph,
    SalesFigures,
    HitRate,
    AllVisitor,
    SalesReport,
    PlatformVisitor,
    TopSalesLocations
}

export { Graph }