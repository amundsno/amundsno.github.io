import TogglePauseButton from './TogglePauseButton'

import { useContext, useEffect, useState } from 'react'
import TimerContext from '../../../context/TimerContext'

import { FaPause, FaPlay } from 'react-icons/fa'
import TimerControls from './TimerControls'

const TimerCard = ({ id }) => {
    const {
        timers, titleRef, getColors, getEndTime,
        deleteTimer, updateTimer
    } = useContext(TimerContext)

    const timer = timers.find((timer) => timer.id === id)

    const [animateBuzz, setAnimateBuzz] = useState(false)

    const handleBuzzAnimation = () => {
        setAnimateBuzz(true)
        setTimeout(() => { setAnimateBuzz(false) }, 700)
    }

    const [isCountdown, setIsCountdown] = useState(
        timer.startTime !== timer.endTime ? true : false
    )

    const [isCompleted, setIsCompleted] = useState(false)

    useEffect(() => {
        if (isCountdown && isCompleted) {
            handleBuzzAnimation()
            const previousTitle = document.title
            document.title = `${timer.title} completed!`
            
            const favicon = document.getElementById('favicon')
            const previousFavicon = favicon.getAttribute('href')
            favicon.setAttribute('href', '/alarm-favicon.ico')

            setTimeout(() => {
                document.title = previousTitle
                favicon.setAttribute('href', previousFavicon)
            }, 5000)
            
        }
    }, [isCompleted])

    const getRemainingTime = () => {
        const currentTime = timer.pauseTime > 0 ? timer.pauseTime : new Date().getTime()
        const roundMethod = timer.endTime - currentTime > 0 ? Math.floor : Math.ceil
        const seconds = roundMethod((timer.endTime - currentTime) / 1000)
        const minutes = roundMethod(seconds / 60)
        const hours = roundMethod(minutes / 60)
        if (isCountdown && !isCompleted && seconds == 0) setIsCompleted(true)
        return { hours: hours, minutes: minutes % 60, seconds: seconds % 60 }
    }

    const [remainingTime, setRemainingTime] = useState(getRemainingTime())
    const [isPaused, setIsPaused] = useState(timer.pauseTime > 0)

    const handleDelete = () => {
        deleteTimer(timer.id)
        titleRef.current.focus({ preventScroll: true })
    }

    useEffect(() => {
        handleClickAnimation() // Apply the click animation to newly created timers
        titleRef.current.focus() // Keep focus on the input
        const interval = setInterval(() => setRemainingTime(getRemainingTime()), 1000)
        if (isPaused) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isPaused])

    const [cardColors, setCardColors] = useState(getColors(timer.colorIndex))

    const handleNextColor = () => {
        timer.colorIndex++
        updateTimer(timer)
        setCardColors(getColors(timer.colorIndex))
        titleRef.current.focus({ preventScroll: true })
    }

    const handleTogglePause = () => {
        if (timer.pauseTime === 0) {
            timer.pauseTime = new Date().getTime()
            setIsPaused(true)
        } else {
            timer.endTime += new Date().getTime() - timer.pauseTime
            timer.pauseTime = 0
            setIsPaused(false)
            setRemainingTime(getRemainingTime())
        }
        titleRef.current.focus({ preventScroll: true })
        updateTimer(timer)
    }

    const [animateClick, setAnimateClick] = useState(false)

    const handleClickAnimation = () => {
        setAnimateClick(true)
        setTimeout(() => { setAnimateClick(false) }, 200)
    }

    const [isMuted, setIsMuted] = useState(timer.isMuted)

    const handleToggleMute = () => {
        // To avoid playing the alarm if the timer is unmuted after completing
        if (isCompleted) {
            setIsCompleted(false)
        }
        setIsMuted(!isMuted)
        timer.isMuted = !timer.isMuted
        updateTimer(timer)
        titleRef.current.focus({ preventScroll: true })
    }

    const handleRestart = () => {
        const timeNow = new Date().getTime()
        const {hours, minutes, seconds } = timer.originalDuration
        
        if (isPaused) handleTogglePause()
        
        timer.startTime = timeNow
        if (hours || minutes || seconds) {    
            timer.endTime = getEndTime(hours, minutes, seconds) - 1
        } else {
            timer.endTime = timeNow
        }
        
        updateTimer(timer)
        setRemainingTime(getRemainingTime())
    }

    return (
        <div
            className={`timer-card ${animateClick ? 'animate click' : ''} ${animateBuzz ? 'animate buzz' : ''}`}
            style={{
                backgroundColor: cardColors.background,
                borderColor: cardColors.border,
                color: cardColors.button
            }}
        >
            <TimerControls 
                handleDelete={handleDelete}
                handleRestart={handleRestart}
                handleClickAnimation={handleClickAnimation}
                handleNextColor={handleNextColor}
                handleToggleMute={handleToggleMute}
                isMuted={isMuted}
            />
            <h2 className="card-title">{timer.title}</h2>
            <p className='duration'>
                {remainingTime.hours} h : {remainingTime.minutes} m : {remainingTime.seconds} s
            </p>
            {/* TODO: Restart button would be nice as well */}
            <TogglePauseButton
                handleTogglePause={handleTogglePause}
                handleClickAnimation={handleClickAnimation}
                Icon={isPaused ? FaPlay : FaPause}
            />
            {isCompleted && !isMuted && 
                <audio src="timer_beeps.mp3" autoPlay={true}>
                    Your browser does not support the audio element
                </audio>
            }
        </div>
    )
}

export default TimerCard