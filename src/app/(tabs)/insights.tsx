import { SearchBar } from "@/src/components/search-bar";
import { colors } from "@/src/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, Text, View } from "react-native";


export default function Insights(){
    return(
        <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1 p-6"
    >
      <View className='my-16'>
                <Text className='text-4xl font-medium tracking-tight leading-[44px]'>Insights</Text>
      </View>
      <SearchBar>
        <Ionicons name='search' size={20} color={colors.black[100]} style={{opacity: 0.5}} />
        <SearchBar.Field placeholder='Pesquisar...' />
      </SearchBar>
      <View className="flex-row mt-4 gap-5 ml-4">
      <Pressable >
            <Text className='text-black text-base font-medium'>Clicks</Text>
        </Pressable>
        <Pressable >
            <Text className='text-gray-500 text-base font-medium'>Leads</Text>
        </Pressable>
        <Pressable >
            <Text className='text-gray-500  text-base font-medium'>Conversão</Text>
        </Pressable>
      </View>
      <ScrollView>
      </ScrollView>
    </LinearGradient>
    )
}