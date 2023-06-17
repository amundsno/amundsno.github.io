import { createContext, useState, useRef } from "react";
import colors from "./colors";

const TimerContext = createContext({})

export const TimerContextProvider = ({ children }) => {

    const ICON_SIZE = 27;

    const titleRef = useRef()

    const loadFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('timers')) || []
    }

    const [timers, setTimers] = useState(loadFromLocalStorage())

    const setAndSaveTimers = (timerList) => {
        setTimers(timerList)
        localStorage.setItem('timers', JSON.stringify(timerList))
    }

    const addTimer = (newTimer) => {
        const newTimers = [...timers, newTimer]
        setAndSaveTimers(newTimers)
    }

    const deleteTimer = (id) => {
        const newTimers = timers.filter((timer) => timer.id !== id)
        setAndSaveTimers(newTimers)
    }

    const updateTimer = (timer) => {
        const newTimers = timers.map((item) => item.id === timer.id ? timer : item)
        setAndSaveTimers(newTimers)
    }

    const getColors = (colorIndex) => {
        return colors[colorIndex % (colors.length)]
    }

    const getEndTime = (hours, minutes, seconds) => {
        return new Date().getTime() +
            ((hours * 60 + minutes) * 60 + seconds + (
                // If a time is set, add one second to include it in the timer
                (hours || minutes || seconds ? 1 : 0)
            )) * 1000
    }

    return (
        <TimerContext.Provider value={{
            ICON_SIZE,
            getEndTime,
            timers, setTimers,
            titleRef,
            getColors,
            addTimer, deleteTimer, updateTimer
        }} >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext