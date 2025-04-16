import { useFormContext, useWatch } from "react-hook-form";

export const useHeader = () => {
    const { control } = useFormContext();
    const [minuteOption, hourOption, monthDayOption, weekDaysOption, monthsOption, specificHours, specificMinutes, specificMonthDays, specificMonths,
        specificWeekDays, everyXHours, everyXMinutes, minHourBetween, maxHourBetween, minMinuteBetween, maxMinuteBetween] = useWatch({
            control,
            name: [
                'minuteOption',
                'hourOption',
                'monthDayOption',
                'weekDaysOption',
                'monthsOption',
                'specificHours',
                'specificMinutes',
                'specificMonthDays',
                'specificMonths',
                'specificWeekDays',
                'everyXHours',
                'everyXMinutes',
                'minHourBetween',
                'maxHourBetween',
                'minMinuteBetween',
                'maxMinuteBetween'
            ],
        });

    const getHours = () => {
        switch (hourOption) {
            case 'everyHour':
                return "*";
            case 'everyHourBetween':
                return getEveryItemBetween(minHourBetween, maxHourBetween)
            case 'everyXHours':
                return getEveryXItems(everyXHours)
            case 'specificHours': {
                return getSpecificItems(specificHours)
            }
            default:
                return "*"
        }
    }

    const getMinutes = () => {
        switch (minuteOption) {
            case 'everyMinute':
                return "*";
            case 'everyMinuteBetween':
                return getEveryItemBetween(minMinuteBetween, maxMinuteBetween)
            case 'everyXMinutes':
                return getEveryXItems(everyXMinutes)
            case 'specificMinutes':
                return getSpecificItems(specificMinutes)
            default:
                return "*"
        }
    }

    const getMonthDays = () => {
        switch (monthDayOption) {
            case 'everyMonthDay':
                return '*'
            case 'specificMonthDays':
                return getSpecificItems(specificMonthDays)
            default:
                return '*'
        }
    }

    const getMonths = () => {
        switch (monthsOption) {
            case 'everyMonth':
                return '*'
            case 'specificMonths':
                return getSpecificItems(specificMonths)
            default:
                return '*'
        }
    }

    const getWeekDays = () => {
        switch (weekDaysOption) {
            case 'everyWeekDay':
                return '*'
            case 'specificWeekDays':
                return getSpecificItems(specificWeekDays)
            default:
                return '*'
        }
    }

    const getEveryItemBetween = (minValue: number, maxValue: number): string => {
        if (minValue !== null && maxValue !== null) {
            return `${minValue}-${maxValue}`
        }
        return ''
    }

    const getEveryXItems = (item: number): string => {
        if (item !== null) {
            return `*/${Number(item)}`
        }
        return ''
    }

    const getSpecificItems = (items: string[]): string => {
        if (items.length) {
            return `${items.toString()}`
        }
        return ''
    }

    const cron = `${getMinutes()} ${getHours()} ${getMonthDays()} ${getMonths()} ${getWeekDays()}`


    return { cron }
}