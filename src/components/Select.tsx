import React, { useRef, useState } from "react"
import { FlatList, LayoutRectangle, Modal, Text, TouchableOpacity, View } from "react-native"
import { cn } from "@/lib/utils"
import { Entypo } from "@expo/vector-icons"

export interface ISelectedOption {
	label: string
	value: string
}

export interface SelectProps {
	/** Add label string */
	label?: string
	/** Add style to label */
	labelClassName?: string
	/** Add style to touchableOpacity selector */
	selectClassName?: string
	/** Add your options array */
	options: ISelectedOption[]
	/** Add your selected state changer */
	onSelect: (value: string) => void
	/** Add your selected state value */
	selectedValue?: string
	/** Add your selected placeholder -> default is 'Select an option' */
	placeholder?: string
	/** Optional width override */
	width?: number
	/** Optional dropdown position override */
	dropdownOffset?: {
		x?: number
		y?: number
	}
}

export const Select = ({
	label,
	labelClassName,
	selectClassName,
	options,
	onSelect,
	selectedValue,
	placeholder = "Select an option",
	width = 200,
	dropdownOffset = { x: 0, y: 0 },
}: SelectProps) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [dropdownPosition, setDropdownPosition] = useState<LayoutRectangle | null>(null)
	const selectButtonRef = useRef<TouchableOpacity>(null)

	const handleSelect = (value: string) => {
		onSelect(value)
		setIsDropdownOpen(false)
	}

	const openDropdown = () => {
		selectButtonRef.current?.measure((_fx, _fy, _w, _h, px, py) => {
			setDropdownPosition({
				x: px + (dropdownOffset.x || 0),
				y: py + _h + (dropdownOffset.y || 0),
				width: width,
				height: _h,
			})
			setIsDropdownOpen(true)
		})
	}

	return (
		<View
			style={{ width }}
			className={cn("flex flex-row gap-1.5")}
		>
			{label && <Text className={cn("text-base text-primary font-medium mb-1", labelClassName)}>{label}</Text>}

			<TouchableOpacity
				ref={selectButtonRef}
				style={{ width }}
				className={cn(
					"flex-row items-center justify-between",
					"border border-gray-200 py-3 px-4 rounded-xl bg-white",
					"active:bg-gray-50",
					selectClassName
				)}
				onPress={openDropdown}
			>
				<View className="flex-row items-center gap-1 flex-1">
					<Text
						className={cn("font-regular text-sm", selectedValue ? "text-gray-900" : "text-gray-400")}
						numberOfLines={1}
					>
						{selectedValue ? options.find((option) => option.value === selectedValue)?.label : placeholder}
					</Text>
					<Entypo
						name="chevron-down"
						size={20}
						color="gray"
						style={{
							transform: [{ rotate: isDropdownOpen ? "180deg" : "0deg" }],
						}}
					/>
				</View>
			</TouchableOpacity>

			{isDropdownOpen && dropdownPosition && (
				<Modal
					visible={isDropdownOpen}
					transparent
					animationType="none"
				>
					<TouchableOpacity
						style={{ flex: 1 }}
						activeOpacity={1}
						onPress={() => setIsDropdownOpen(false)}
					>
						<View
							style={{
								top: dropdownPosition.y,
								left: dropdownPosition.x,
								width: dropdownPosition.width,
								shadowOpacity: 0.15,
								shadowOffset: { width: 0, height: 4 },
								shadowRadius: 12,
								elevation: 8,
							}}
							className="absolute bg-white p-2 rounded-xl overflow-hidden"
						>
							<FlatList
								data={options}
								keyExtractor={(item) => item.value}
								className="max-h-72"
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => (
									<TouchableOpacity
										onPress={() => handleSelect(item.value)}
										className={cn("py-4 px-4 rounded-lg", "active:bg-gray-50")}
									>
										<Text
											className={cn(
												"font-regular text-base",
												item.value === selectedValue
													? "font-regular text-primary text-black-200"
													: "text-gray-700"
											)}
											numberOfLines={1}
										>
											{item.label}
										</Text>
									</TouchableOpacity>
								)}
							/>
						</View>
					</TouchableOpacity>
				</Modal>
			)}
		</View>
	)
}
