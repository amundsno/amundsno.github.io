import { createContext, useState, useRef } from "react";
import colors from "./colors";

const TimerContext = createContext({})

export const TimerContextProvider = ({ children }) => {

    const titleRef = useRef()

    const [timers, setTimers] = useState([
        {
            id: "0",
            title: "Practise React",
            endTime: new Date().getTime() + 10 * 1000,
            colorIndex: 0
        },
        {
            id: "1",
            title: "Go to bed",
            endTime: new Date().getTime() + ((3 * 60 + 50) * 60 + 30 + 1) * 1000,
            colorIndex: 1
        },
        {
            id: "2",
            title: "Go to beach volley",
            endTime: new Date().getTime() + 12 * 60 * 60 * 1000,
            colorIndex: 2
        }
    ])

    const getColors = (colorIndex) => {
        return colors[colorIndex % (colors.length)]
    }

    return (
        <TimerContext.Provider value={{
            timers, setTimers,
            titleRef,
            getColors
        }} >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext