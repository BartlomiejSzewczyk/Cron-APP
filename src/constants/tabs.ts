export type Tab = {
    label: string;
    value: TabValue;
}

export type TabValue = 'stats' | 'sales' | 'base' | 'campaign' | 'project';

export const tabs: Tab[] = [
    { label: 'Sprzedaże', value: 'sales' }, { label: 'Statystyki', value: 'stats' }, { label: 'Baza', value: 'base' }, { label: 'Kampania', value: 'campaign' }, { label: 'Projekt', value: 'project' },
]

