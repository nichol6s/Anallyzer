import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';
import { clsx } from "clsx";

type CategoryProps = PressableProps & {
    title: string;
    isSelected?: boolean;
};

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
    return (
        <Pressable className="p-2"  {...rest}>
            <Text className={clsx(isSelected ? "text-black-100 opacity-100 font-mediumj text-sm" : "text-black-100 opacity-30 font-mediumj text-sm")}>{title}</Text>
        </Pressable>
    );
}