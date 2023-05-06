import { useState, useEffect } from "react"

function calculateTimeLeft(endTime: string) {
    const difference = +new Date(endTime) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    return timeLeft
}

export function useCountdown(endTime: string) {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endTime))
        }, 1000)

        return () => clearInterval(intervalId)
    }, [endTime])

    return timeLeft
}
