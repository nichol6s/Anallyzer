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
import CustomerGrowthSvg from "@/assets/Graphs/CustomerGrowth.svg"

type BasicGraphProps = {
    title: string
    percentage?: string
    quantity: number
    valueLastYear: number
}

function BasicGraph({ title, percentage, quantity, valueLastYear }: BasicGraphProps) {
    return (
        <View className=" w-[165] h-[123] p-4 rounded-3xl bg-white">

            <View className="flex-row gap-2">
                <Text className="font-semibold text-sm">{title}</Text>

                {percentage && (
                    <Text className={`font-semibold text-sm ${percentage.includes('+') ? 'text-green' : 'text-red'}`}>
                        {percentage}
                        <AntDesign name={percentage.includes('+') ? "arrowup" : "arrowdown"} size={12} color={percentage.includes('+') ? colors.green : colors.red} />
                    </Text>
                )}
            </View>

            <Text className="font-semibold text-2xl mt-2">{quantity.toFixed(3)}</Text>

            <Text className="font-regular text-gray-200 text-xs mt-2">Comparado com {valueLastYear.toFixed(3)} ano passado</Text>
        </View>
    )
}

type LargeGraphProps = {
    quantity: number
    title: string
    percentage: string
}

const LargeGraph: React.FC<LargeGraphProps> = ({ quantity, title, percentage }) => {
    return (
        <View className="w-[302px] h-[111px] border-2 border-[#E9E6F7] rounded-3xl bg-white px-7 py-4 gap-2">
            <Text className="font-semibold text-2xl">{quantity}</Text>
            <Text className="font-semibold text-sm">{title}</Text>
            {percentage && (
                <Text className={`font-semibold text-sm ${percentage.includes('+') ? 'text-green' : 'text-red'}`}>
                    {percentage}
                    <AntDesign
                        name={percentage.includes('+') ? 'arrowup' : 'arrowdown'}
                        size={12}
                        color={percentage.includes('+') ? colors.green : colors.red}
                    />
                </Text>
            )}
        </View>
    );
};

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

function CustomerGrowth() {
    return <CustomerGrowthSvg />
}

const Graph = {
    BasicGraph,
    LargeGraph,
    SalesFigures,
    HitRate,
    AllVisitor,
    SalesReport,
    PlatformVisitor,
    TopSalesLocations,
    CustomerGrowth
}

export { Graph }