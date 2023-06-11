import ColorCycleButton from './ColorCycleButton'
import DeleteButton from './DeleteButton'

import { FaPause } from 'react-icons/fa'

import { useContext, useEffect, useState } from 'react'
import TimerContext from '../../../context/TimerContext'

const TimerCard = ({ id }) => {
    const { timers, setTimers, titleRef, getColors } = useContext(TimerContext)

    const timer = timers.find((timer) => timer.id === id)

    const getRemainingTime = () => {
        const currentTime = new Date().getTime()
        const roundMethod = timer.endTime - currentTime > 0 ? Math.floor : Math.ceil
        const seconds = roundMethod((timer.endTime - currentTime) / 1000)
        const minutes = roundMethod(seconds / 60)
        const hours = roundMethod(minutes / 60)
        return { hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 }
    }

    const [remainingTime, setRemainingTime] = useState(getRemainingTime())

    const handleDelete = () => {
        setTimers(timers.filter((timer) => timer.id !== id))
        titleRef.current.focus()
    }

    useEffect(() => {
        const interval = setInterval(() => setRemainingTime(getRemainingTime()), 1000)
        return () => clearInterval(interval)
    }, [])

    const [cardColors, setCardColors] = useState(getColors(timer.colorIndex))

    const handleNextColor = () => {
        timer.colorIndex++
        setTimers(timers.map((item) => item.id === timer.id ? timer : item))
        setCardColors(getColors(timer.colorIndex))
    }


    return (
        <div
            className="timerCard"
            style={{
                backgroundColor: cardColors.background,
                borderColor: cardColors.border,
                color: cardColors.button
            }}
        >
            <div className='timerCardTopRowContainer'>
                <ColorCycleButton handleNextColor={handleNextColor} />
                <DeleteButton handleDelete={handleDelete} />
            </div>
            <h2 className="timerCardTitle">{timer.title}</h2>
            <p className='timer'>
                {remainingTime.hours} h : {remainingTime.minutes} m : {remainingTime.seconds} s
            </p>
            <button className='togglePausePlayButton'>
                {/* TODO: Repeat button would be nice as well */}
                <FaPause size={20} />
            </button>
        </div>
    )
}

export default TimerCard