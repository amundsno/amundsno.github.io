import ColorCycleButton from './ColorCycleButton'
import DeleteButton from './DeleteButton'

import { FaPause } from 'react-icons/fa'

import { useContext, useEffect, useState } from 'react'
import TimerContext from '../../../context/TimerContext'

const TimerCard = ({ id }) => {
    const { timers, setTimers } = useContext(TimerContext)

    const timer = timers.find((timer) => timer.id === id)

    const getRemainingTime = () => {
        const seconds = Math.floor((timer.endTime - new Date().getTime()) / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        return { hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 }
    }

    const [remainingTime, setRemainingTime] = useState(getRemainingTime())

    const handleDelete = () => {
        setTimers(timers.filter((timer) => timer.id !== id))
    }

    useEffect(() => {
        const interval = setInterval(() => setRemainingTime(getRemainingTime()), 1000)
        return () => clearInterval(interval)
    }, [])



    return (
        <div
            className="timerCard"
            style={{
                backgroundColor: timer.colors.background,
                borderColor: timer.colors.border,
                color: timer.colors.button
            }}
        >
            <div className='timerCardTopRowContainer'>
                <ColorCycleButton />
                <DeleteButton handleDelete={handleDelete} />
            </div>
            <h2 className="timerCardTitle">{timer.title}</h2>
            {remainingTime.hours >= 0 &&
                <p className='timer'>
                    {remainingTime.hours} h : {remainingTime.minutes} m : {remainingTime.seconds} s
                </p>
            }
            {remainingTime.hours < 0 &&
                <p className='timer'>
                    0 h : 0 m : 0 s
                </p>
            }
            <button className='togglePausePlayButton'>
                <FaPause size={20} />
            </button>
        </div>
    )
}

export default TimerCard