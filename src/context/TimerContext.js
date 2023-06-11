import { createContext, useState, useRef } from "react";
import colors from "./colors";

const TimerContext = createContext({})

export const TimerContextProvider = ({ children }) => {

    const titleRef = useRef()

    const loadFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('timers')) || []
    }

    const [timers, setTimers] = useState(loadFromLocalStorage())

    const addToLocalStorage = (timer) => {
        const storedTimers = loadFromLocalStorage()
        localStorage.setItem('timers', JSON.stringify([...storedTimers, timer]))
    }

    const removeFromLocalStorage = (timer) => {
        const storedTimers = loadFromLocalStorage()
        localStorage.setItem('timers', JSON.stringify(
            storedTimers.filter((item) => item.id !== timer.id))
        )
    }

    const updateLocalStorage = (timer) => {
        const storedTimers = loadFromLocalStorage()
        localStorage.setItem('timers', JSON.stringify(storedTimers.map(
            (item) => item.id === timer.id ? timer : item
        )))
    }
    
    const getColors = (colorIndex) => {
        return colors[colorIndex % (colors.length)]
    }   

    return (
        <TimerContext.Provider value={{
            timers, setTimers,
            titleRef,
            getColors,
            addToLocalStorage, removeFromLocalStorage, updateLocalStorage
        }} >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext