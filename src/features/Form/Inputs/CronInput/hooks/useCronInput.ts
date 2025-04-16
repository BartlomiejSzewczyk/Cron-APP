import { useEffect, useState } from "react"

export const useCronInput = () => {
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        const handleCustom = (e: Event) => {
            const customEvent = e as CustomEvent<{ cron: string }>;
            setValue(customEvent.detail.cron)
        };

        window.addEventListener('set-cron', handleCustom);
        return () => window.removeEventListener('set-cron', handleCustom);
    }, []);


    return { value, setValue }
}