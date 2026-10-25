import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'

function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') return initialValue
        try {
            const saved = window.localStorage.getItem(key)
            return saved !== null ? (JSON.parse(saved) as T) : initialValue
        } catch {
            return initialValue
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch {
            // Ignore quota or private-mode errors
        }
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
