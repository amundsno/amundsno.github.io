import { useContext, useState } from "react"
import TimerContext from "../../../context/TimerContext"
import TitleInput from "./TitleInput"
import TimeInput from "./TimeInput"
import { FaPlay } from "react-icons/fa"

const TimerForm = () => {

    const MAX_TITLE_LENGTH = 20

    const { 
        timers, setTimers, titleRef, addToLocalStorage, getEndTime
    } = useContext(TimerContext)

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
            endTime: getEndTime(hoursInt, minutesInt, secondsInt),
            pauseTime: 0,
            originalDuration: {hours: hoursInt, minutes: minutesInt, seconds: secondsInt},
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
        <div className="timer-card form">
            <form onSubmit={handleSubmit}>
                <TitleInput
                    title={title}
                    setTitle={setTitle}
                    titleRef={titleRef}
                    maxLength={MAX_TITLE_LENGTH}
                />
                <div className='duration-input-container'>
                    <TimeInput label={'\xa0h'} duration={hours} setDuration={setHours} />
                    <p className="duration-input-sep">&nbsp;:&nbsp;</p>
                    <TimeInput label={'\xa0m'} duration={minutes} setDuration={setMinutes} />
                    <p className="duration-input-sep">&nbsp;:&nbsp;</p>
                    <TimeInput label={'\xa0s'} duration={seconds} setDuration={setSeconds} />
                </div>
                <button style={{ color: "#757575" }} type="submit">
                    <FaPlay size={20} />
                </button>
            </form>
        </div>
    )
}

export default TimerForm