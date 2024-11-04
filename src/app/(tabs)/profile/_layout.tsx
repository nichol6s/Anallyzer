import { Drawer } from "expo-router/drawer"
import CustomDrawerContent from "@/components/custom-drawer-content"

export default function ProfileLayout() {
	return (
		<Drawer
			screenOptions={{
				headerShown: false,
				drawerPosition: "right",
				drawerType: "front",
				drawerStyle: {
					width: "60%",
				},
			}}
			drawerContent={() => <CustomDrawerContent />}
		>
			<Drawer.Screen
				name="index"
				options={{
					drawerLabel: () => null,
				}}
			/>
		</Drawer>
	)
}
