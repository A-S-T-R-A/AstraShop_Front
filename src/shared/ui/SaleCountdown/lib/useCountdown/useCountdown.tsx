import { useState, useEffect } from "react"

interface ITimeLeft {
    hours: number
    minutes: number
    seconds: number
}

type ISO8601DateString = `${number}-${number}-${number}T${number}:${number}:${number}Z`

function calculateTimeLeft(endTime: ISO8601DateString): ITimeLeft {
    const difference = +new Date(endTime) - +new Date()

    if (difference > 0) {
        return {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    return { hours: 0, minutes: 0, seconds: 0 }
}

export function useCountdown(endTime: ISO8601DateString) {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endTime))
        }, 1000)

        return () => clearInterval(intervalId)
    }, [endTime])

    return {
        hours: timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours,
        minutes: timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes,
        seconds: timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds,
    }
}
