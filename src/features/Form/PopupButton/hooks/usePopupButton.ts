import { useState } from "react"

export const usePopupButton = () => {
    const [open, setOpen] = useState<boolean>(false)


    return { open, openPopup: () => setOpen(true), closePopup: () => setOpen(false) }
}