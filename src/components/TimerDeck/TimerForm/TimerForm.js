import { useContext, useState } from "react"
import TimerContext from "../../../context/TimerContext"
import TitleInput from "./TitleInput"
import TimeInput from "./TimeInput"
import { FaCheck, FaPlay, FaPlayCircle } from "react-icons/fa"

const TimerForm = () => {
    const { timers, setTimers, titleRef, addToLocalStorage } = useContext(TimerContext)

    const [title, setTitle] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()

        const hoursInt = hours ? parseInt(hours) : 0
        const minutesInt = minutes ? parseInt(minutes) : 0
        const secondsInt = seconds ? parseInt(seconds) : 0

        const id = timers.length ? timers[timers.length - 1].id + 1 : 0

        const newTimer = {
            id,
            title: title ? title : `Timer ${id.toString()}`,
            startTime: new Date().getTime(),
            endTime:
                new Date().getTime() + 
                ((hoursInt * 60 + minutesInt) * 60 + secondsInt + (
                    // If a time is set, add one second to include it in the timer
                    (hoursInt || minutesInt || secondsInt ? 1 : 0)
                )) * 1000,
            pauseTime: 0,
            colorIndex: timers.length ? timers[timers.length - 1].colorIndex + 1 : 0
        }
        setTimers([...timers, newTimer])
        addToLocalStorage(newTimer)
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
                <button style={{color: "#757575"}} type="submit">
                    <FaPlay size={20} />
                </button>
            </form>
        </div>
    )
}

export default TimerForm