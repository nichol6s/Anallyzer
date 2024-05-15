import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

import Arrow from '@/components/arrow-back'
import { Graph } from '@/components/graphs'

export default function DetailedInsights() {
    const router = useRouter()

    return (
        <LinearGradient
            colors={['#DAD5FB', '#FFF']}
            start={[0, 0]}
            end={[0, 1]}
            className="flex-1 p-6"
        >
            <ScrollView className='px-2' showsVerticalScrollIndicator={false}>
                <View className='items-left mt-12 mb-6'>
                    <Arrow onPress={() => router.back()} />
                </View>


                <View className='items-left'>
                    <Text className='text-2xl font-mediumj'>Novidades da Semana: Camp...</Text>
                </View>

                <View className='mt-6 gap-4'>
                    <Graph.LargeGraph
                        quantity={33.889}
                        title="Clicks"
                        percentage="+2,5%"
                    />

                    <Text className='text-sm font-light text-gray-200'>
                        Parabéns pelo aumento de 4,5% nos cliques em relação ao esperado! Isso indica que sua campanha conseguiu atrair a atenção dos destinatários e incentivá-los a interagir com seu conteúdo.
                    </Text>
                </View>

                <View className='mt-6 gap-4'>
                    <Graph.LargeGraph
                        quantity={56.644}
                        title="Aberturas"
                        percentage="+2%"
                    />

                    <Text className='text-sm font-light text-gray-200'>
                        Esse aumento de 2% mostra que sua linha de assunto e pré-visualização estão chamando a atenção do público-alvo. Sua campanha está despertanto interesse, parabéns!
                    </Text>
                </View>

                <View className='mt-6 gap-4'>
                    <Graph.LargeGraph
                        quantity={86.644}
                        title="Envios"
                        percentage="+0,5%"
                    />

                    <Text className='text-sm font-light text-gray-200'>
                        Embora o crescimento de 0,5% nos envios seja modesto, é encorajador ver que sua campanha está alcançando um número maior de destinatários do que o esperado.
                    </Text>
                </View>

                <View className='mt-6 gap-4'>
                    <Graph.LargeGraph
                        quantity={1.678}
                        title="Leads"
                        percentage="-38%"
                    />

                    <Text className='text-sm font-light text-gray-200'>
                        Apesar da diminuição de 38% no número de leads, é importante analisar os motivos por trás disso. Revise sua oferta ou conteúdo para garantir que esteja alinhado com as expectativas e necessidades do seu público-alvo.
                    </Text>
                </View>

                <View className='mt-6 gap-4'>
                    <Graph.CustomerGrowth />

                    <Text className='text-sm font-light text-gray-200'>
                        O gráfico mostra um crescimento consistente ao longo dos 6 meses da campanha, com um aumento notável no número de  clientes Homens. Isso é encorajador, pois indica que sua campanha está conseguindo atrair e reter eles.
                    </Text>
                </View>
            </ScrollView>

        </LinearGradient>
    )
}