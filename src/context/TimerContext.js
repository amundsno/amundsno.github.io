import { createContext, useState, useRef } from "react";

const TimerContext = createContext({})

export const TimerContextProvider = ({ children }) => {

    const titleRef = useRef()

    const [timers, setTimers] = useState([
        {
            id: "0",
            title: "Practise React",
            endTime: new Date().getTime() + 10 * 1000,
            colors: {
                background: "#F6DDCC",
                border: "#EDBB99",
                button: "#E59866"
            }
        },
        {
            id: "1",
            title: "Go to bed",
            endTime: new Date().getTime() + ((3 * 60 + 50) * 60 + 30 + 1) * 1000,
            colors: {
                background: "#D6EAF8",
                border: "#AED6F1",
                button: "#85C1E9"
            }
        },
        {
            id: "2",
            title: "Go to beach volley",
            endTime: new Date().getTime() + 12 * 60 * 60 * 1000,
            colors: {
                background: "#FADBD8",
                border: "#F5B7B1",
                button: "#F1948A"
            }
        }
    ])

    return (
        <TimerContext.Provider value={{
            timers, setTimers,
            titleRef
        }} >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext