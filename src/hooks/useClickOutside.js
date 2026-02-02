import { useEffect } from 'react'

export function useClickOutside(refs, onOutside) {
    useEffect(() => {
        const list = Array.isArray(refs) ? refs : [refs]

        const handler = (e) => {
            const clickedInsideSomeRef = list.some(ref =>
            {
                const el = ref?.current
                return el && el.contains(e.target)
            })

            if (clickedInsideSomeRef) return
            onOutside(e)
        }

        document.addEventListener('mousedown', handler)
        document.addEventListener('touchstart', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
            document.removeEventListener('touchstart', handler)
        }
    }, [refs, onOutside])
}
