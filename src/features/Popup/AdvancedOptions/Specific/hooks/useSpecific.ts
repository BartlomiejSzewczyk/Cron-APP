import { advancedInputOptions, AdvancedInputType } from "@constants/inputOptions";
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form";

interface useSpecificProps {
    active: boolean;
    type: AdvancedInputType
}

export const useSpecific = ({ active, type }: useSpecificProps) => {
    const { setValue } = useFormContext();
    const [items, setItems] = useState<number[]>([])
    const data = advancedInputOptions[type];

    useEffect(() => {
        if (active && !items.length) {
            setItems([data.specific.minValue])
        }
    }, [active])

    useEffect(() => {
        if (items.length) {
            setValue(data.specific.key, items)
        }
    }, [items])


    const increase = () => {
        if (items.length === 1) {
            const newValue = items[0] + 1
            if (newValue <= data.specific.maxValue) {
                setItems([newValue])
            }
        }
    }

    const decrease = () => {
        if (items.length === 1) {
            const newValue = items[0] - 1
            if (newValue >= data.specific.minValue) {
                setItems([newValue])
            }
        }
    }


    return { items, setItems, increase, decrease }
}