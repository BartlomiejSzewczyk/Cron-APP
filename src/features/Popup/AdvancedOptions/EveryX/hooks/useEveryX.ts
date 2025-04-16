import { advancedInputOptions, AdvancedInputType } from "@constants/inputOptions";
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form";

interface useEveryXProps {
    active: boolean;
    type: AdvancedInputType
}

export const useEveryX = ({ active, type }: useEveryXProps) => {
    const { setValue } = useFormContext();
    const [item, setItem] = useState<number | null>(null)
    const data = advancedInputOptions[type];

    useEffect(() => {
        if (active && item === null) {
            setItem(data.everyX.minValue)
        }
    }, [active])

    useEffect(() => {
        if (item !== null) {
            setValue(data.everyX.key, item)
        }
    }, [item])


    const increase = () => {
        if (item !== null) {
            const newValue = item + 1
            if (newValue <= data.everyX.maxValue) {
                setItem(newValue)
            }
        }
    }

    const decrease = () => {
        if (item !== null) {
            const newValue = item - 1
            if (newValue >= data.everyX.minValue) {
                setItem(newValue)
            }
        }
    }



    return { item, setItem, increase, decrease }
} 