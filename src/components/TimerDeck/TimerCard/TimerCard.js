import ColorCycleButton from './ColorCycleButton'
import DeleteButton from './DeleteButton'
import TogglePausePlayButton from './TogglePausePlayButton'

import { useContext, useEffect, useState } from 'react'
import TimerContext from '../../../context/TimerContext'

import { FaPause, FaPlay } from 'react-icons/fa'

const TimerCard = ({ id }) => {
    const {
        timers, setTimers, titleRef, getColors,
        addToLocalStorage, removeFromLocalStorage, updateLocalStorage
    } = useContext(TimerContext)

    const timer = timers.find((timer) => timer.id === id)

    const getRemainingTime = () => {
        const currentTime = timer.pauseTime > 0 ? timer.pauseTime : new Date().getTime()
        const roundMethod = timer.endTime - currentTime > 0 ? Math.floor : Math.ceil
        const seconds = roundMethod((timer.endTime - currentTime) / 1000)
        const minutes = roundMethod(seconds / 60)
        const hours = roundMethod(minutes / 60)
        return { hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 }
    }

    const [remainingTime, setRemainingTime] = useState(getRemainingTime())
    const [isPaused, setIsPaused] = useState(timer.pauseTime > 0)

    const handleDelete = () => {
        setTimers(timers.filter((timer) => timer.id !== id))
        titleRef.current.focus()
        removeFromLocalStorage(timer)
    }

    useEffect(() => {
        handleClickAnimation()
        const interval = setInterval(() => setRemainingTime(getRemainingTime()), 1000)
        if (isPaused){
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isPaused])

    const [cardColors, setCardColors] = useState(getColors(timer.colorIndex))

    const handleNextColor = () => {
        timer.colorIndex++
        setTimers(timers.map((item) => item.id === timer.id ? timer : item))
        setCardColors(getColors(timer.colorIndex))
        updateLocalStorage(timer)
    }

    const handleTogglePausePlay = () => {
        if (timer.pauseTime === 0) {
            timer.pauseTime = new Date().getTime()
            setIsPaused(true)
        } else {
            timer.endTime += new Date().getTime() - timer.pauseTime
            timer.pauseTime = 0
            setIsPaused(false)
            setRemainingTime(getRemainingTime())
        }
        updateLocalStorage(timer)
    }

    const [animate, setAnimate] = useState(false)

    const handleClickAnimation = () => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 200)
    }

    return (
        <div
            // className="timerCard"
            className={`timerCard ${animate ? 'animate click' : ''}`}
            style={{
                backgroundColor: cardColors.background,
                borderColor: cardColors.border,
                color: cardColors.button
            }}
        >
            <div className='timerCardTopRowContainer'>
                <ColorCycleButton handleNextColor={handleNextColor} handleClickAnimation={handleClickAnimation}/>
                <DeleteButton handleDelete={handleDelete} />
            </div>
            <h2 className="timerCardTitle">{timer.title}</h2>
            <p className='timer'>
                {remainingTime.hours} h : {remainingTime.minutes} m : {remainingTime.seconds} s
            </p>
            {/* TODO: Restart button would be nice as well */}
            <TogglePausePlayButton
                handleTogglePausePlay={handleTogglePausePlay}
                handleClickAnimation={handleClickAnimation}
                Icon={isPaused ? FaPlay : FaPause}
            />
        </div>
    )
}

export default TimerCard