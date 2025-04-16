import { Control, FieldValues, useForm, UseFormSetValue, UseFormWatch } from "react-hook-form";

export const advancedInputOptions: Record<AdvancedInputType, AdvancedOption> = {
    'minute': {
        'watch': 'minuteOption',
        'specific': {
            'key': 'specificMinutes',
            'menuItems': 60,
            'label': 'Określona minuta (wybierz jedną lub więcej)',
            'minValue': 0,
            'maxValue': 59
        },
        'everyX': {
            'key': 'everyXMinutes',
            'menuItems': 60,
            'label': 'Co */X minut',
            'minValue': 0,
            'maxValue': 59
        },
        'everyBetween': {
            'key': 'everyMinuteBetween',
            'menuItems': 60,
            'label': 'Co minutę między',
            'minKey': 'minMinuteBetween',
            'maxKey': 'maxMinuteBetween',
            'minValue': 0,
            'maxValue': 59
        }
    },
    'hour': {
        'watch': 'hourOption',
        'specific': {
            'key': 'specificHours',
            'menuItems': 24,
            'label': 'Określona godzina (wybierz jedną lub więcej)',
            'minValue': 0,
            'maxValue': 23
        },
        'everyX': {
            'key': 'everyXHours',
            'menuItems': 24,
            'label': 'Co */X godzin',
            'minValue': 0,
            'maxValue': 23
        },
        'everyBetween': {
            'key': 'everyHourBetween',
            'menuItems': 24,
            'label': 'Co godzinę między',
            'minKey': 'minHourBetween',
            'maxKey': 'maxHourBetween',
            'minValue': 0,
            'maxValue': 23
        }
    }
}

export const simpleInputOptions: Record<SimpleInputType, SimpleOption> = {
    'monthDays': {
        'watch': 'monthDayOption',
        'specific': {
            'key': 'specificMonthDays',
            'menuItems': 31,
            'label': 'Określony dzień miesiąca (wybierz jeden lub więcej)',
            'minValue': 1,
            'maxValue': 31
        }
    },
    'months': {
        'watch': 'monthsOption',
        'specific': {
            'key': 'specificMonths',
            'menuItems': 12,
            'label': 'Określony miesiąc roku (wybierz jeden lub więcej)',
            'minValue': 1,
            'maxValue': 12
        }
    },
    'weekDays': {
        'watch': 'weekDaysOption',
        'specific': {
            'key': 'specificWeekDays',
            'menuItems': 7,
            'label': 'Określony dzień tygodnia (wybierz jeden lub więcej)',
            'minValue': 1,
            'maxValue': 7
        }
    }
}


export type SimpleInputType = 'monthDays' | 'months' | 'weekDays';
export type AdvancedInputType = 'minute' | 'hour';

type SpecificOption = {
    key: string;
    menuItems: number;
    label: string;
    minValue: number;
    maxValue: number;
};

type EveryXOption = {
    key: string;
    menuItems: number;
    label: string;
    minValue: number;
    maxValue: number;
};

type EveryBetweenOption = {
    key: string;
    menuItems: number;
    label: string;
    minKey: string;
    maxKey: string;
    minValue: number;
    maxValue: number;
};

type AdvancedOption = {
    watch: string;
    specific: SpecificOption;
    everyX: EveryXOption;
    everyBetween: EveryBetweenOption;
};

type SimpleOption = {
    watch: string;
    specific: SpecificOption;
};

export const dayOfWeekMap: Record<number, string> = {
    1: 'Pn',
    2: 'Wt',
    3: 'Śr',
    4: 'Cz',
    5: 'Pt',
    6: 'Sb',
    7: 'Nd'
};

export const monthMap: Record<number, string> = {
    1: 'Styczeń',
    2: 'Luty',
    3: 'Marzec',
    4: 'Kwiecień',
    5: 'Maj',
    6: 'Czerwiec',
    7: 'Lipiec',
    8: 'Sierpień',
    9: 'Wrzesień',
    10: 'Październik',
    11: 'Listopad',
    12: 'Grudzień'
};

export interface TimeOptionProps {
    register: ReturnType<typeof useForm>["register"];
    watch: UseFormWatch<FieldValues>;
    control: Control;
    setValue: UseFormSetValue<FieldValues>;
}