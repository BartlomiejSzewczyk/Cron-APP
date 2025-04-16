import { advancedInputOptions, AdvancedInputType } from "@constants/inputOptions";
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form";

interface useEveryBetweenProps {
    active: boolean;
    type: AdvancedInputType
}

export const useEveryBetween = ({ active, type }: useEveryBetweenProps) => {
    const { setValue } = useFormContext();
    const data = advancedInputOptions[type];
    const [min, setMin] = useState<number | null>(null)
    const [max, setMax] = useState<number | null>(null)

    useEffect(() => {
        if (active && !max) {
            setMin(data.everyBetween.minValue)
            setMax(data.everyBetween.minValue + 1)
        }
    }, [active])

    useEffect(() => {
        if (min !== null) {
            setValue(data.everyBetween.minKey, min)
        }
    }, [min])

    useEffect(() => {
        if (max !== null) {
            setValue(data.everyBetween.maxKey, max)
        }
    }, [max])

    const handleSetMin = (newValue: number | null) => {
        setMin(newValue)
    }

    const handleSetMax = (newValue: number | null) => {
        setMax(newValue)
    }

    const increaseMin = () => {
        if (min !== null) {
            const newValue = min + 1
            if (newValue <= data.everyBetween.maxValue) {
                handleSetMin(newValue)
            }
        }
    }

    const increaseMax = () => {
        if (max != null) {
            const newValue = max + 1
            if (newValue <= data.everyBetween.maxValue) {
                handleSetMax(newValue)
            }
        }
    }

    const decreaseMin = () => {
        if (min) {
            const newValue = min - 1
            if (newValue >= data.everyBetween.minValue) {
                handleSetMin(newValue)
            }
        }
    }

    const decreaseMax = () => {
        if (max) {
            const newValue = max - 1
            if (newValue >= data.everyBetween.minValue) {
                handleSetMax(newValue)
            }
        }
    }

    return { min, max, handleSetMin, handleSetMax, increaseMax, increaseMin, decreaseMax, decreaseMin }
}