const CAMPAIGNS_DATA = [
    {
        id: 1,
        title: "Novidades da semana: Camp...",
        data: [{

            date: "12 Dez, 2023",
            clicks: 33.889,
            clicksFeedback: 'Parabéns pelo aumento de 4,5% nos cliques em relação ao esperado! Isso indica que sua campanha conseguiu atrair a atenção dos destinatários e incentivá-los a interagir com seu conteúdo.',
            opens: 56.644,
            opensFeedback: 'Esse aumento de 2% mostra que sua linha de assunto e pré-visualização estão chamando a atenção do público-alvo. Sua campanha está despertando interesse, parabéns!',
            sends: 86.644,
            sendsFeedback: 'Embora o crescimento de 0,5% nos envios seja modesto, é encorajador ver que sua campanha está alcançando um número maior de destinatários do que o esperado.',
            leads: 1.678,
            leadsFeedback: 'Apesar da diminuição de 38% no número de leads, é importante analisar os motivos por trás disso. Revise sua oferta ou conteúdo para garantir que esteja alinhado com as expectativas e necessidades do seu público-alvo.',
            growth: {
                clicks: '+2.5%',
                opens: '+2.0%',
                sends: '+0.5%',
                leads: '-38.0%',
            }

        }]
    },
    {
        id: 2,
        title: "Cupons Exclusivos: Aproveite!",
        data: [{

            date: "16 Fev, 2024",
            clicks: 44.886,
            clicksFeedback: 'Aumento de 3,2% nos cliques, excelente desempenho!',
            opens: 60.744,
            opensFeedback: 'Aumento de 1,8% nas aberturas, bom trabalho!',
            sends: 92.644,
            sendsFeedback: 'Crescimento de 0,7% nos envios, continue assim!',
            leads: 2.878,
            leadsFeedback: 'Aumento de 10% no número de leads, ótimo resultado!',
            growth: {
                clicks: '+3.2%',
                opens: '+1.8%',
                sends: '+0.7%',
                leads: '+10.0%',
            }

        }]
    },
    {
        id: 3,
        title: 'Black Friday Antecipada: Descontos Imperdíveis!',
        data: [{

            date: "25 Mar, 2024",
            clicks: 22.566,
            clicksFeedback: 'Aumento de 1,5% nos cliques, continue aprimorando!',
            opens: 45.678,
            opensFeedback: 'Aumento de 1% nas aberturas, bom resultado!',
            sends: 70.644,
            sendsFeedback: 'Crescimento de 0,3% nos envios, ajuste sua estratégia para melhorar.',
            leads: 967,
            leadsFeedback: 'Redução de 15% nos leads, revise sua abordagem.',
            growth: {
                clicks: '+1.5%',
                opens: '+1.0%',
                sends: '+0.3%',
                leads: '-15.0%',
            }

        }]
    }
]

type CampaignDataProps = (typeof CAMPAIGNS_DATA)[0]
export { CampaignDataProps, CAMPAIGNS_DATA }
