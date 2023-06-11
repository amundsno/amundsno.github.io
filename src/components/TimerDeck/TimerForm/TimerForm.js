import { useContext, useState } from "react"
import TimerContext from "../../../context/TimerContext"
import TitleInput from "./TitleInput"
import TimeInput from "./TimeInput"

const TimerForm = () => {
    const { timers, setTimers, titleRef } = useContext(TimerContext)

    const [title, setTitle] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')

    

    const handleSubmit = (e) => {
        e.preventDefault()

        const hoursInt = hours ? parseInt(hours) : 0
        const minutesInt = minutes ? parseInt(minutes) : 0
        const secondsInt = seconds ? parseInt(seconds) : 0

        const newTimer = {
            id: timers.length ? timers[timers.length - 1].id + 1 : 0,
            title,
            endTime: new Date().getTime() + ((hoursInt * 60 + minutesInt) * 60 + secondsInt + 1) * 1000,
            colors: {
                background: "#F6DDCC",
                border: "#EDBB99",
                button: "#E59866"
            }
        }
        title && setTimers([...timers, newTimer])
        setHours('')
        setMinutes('')
        setSeconds('')
        setTitle('')
        titleRef.current.focus()
    }

    return (
        <div className="timerCard inactive">
            <form onSubmit={handleSubmit}>
                <TitleInput title={title} setTitle={setTitle} titleRef={titleRef} />
                <div className='timeInputContainer'>
                    <TimeInput label={'\xa0h :\xa0'} duration={hours} setDuration={setHours} />
                    <TimeInput label={'\xa0m :\xa0'} duration={minutes} setDuration={setMinutes} />
                    <TimeInput label={'\xa0s'} duration={seconds} setDuration={setSeconds} />
                </div>
                <input hidden type="submit" />
            </form>
        </div>
    )
}

export default TimerForm