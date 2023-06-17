import { useState } from "react"

const TimeInput = ({ duration, setDuration, label }) => {
    const [isInputError, setIsInputError] = useState(false)
    
    const triggerErrorShakeAnimation = () => {
        setIsInputError(true)
        setTimeout(() => setIsInputError(false), 300)
    }

    const handleInputOnChange = (e) => {
        const inputValue = e.target.value
        const regExpPattern = /^[0-9]*$/
        if(regExpPattern.test(inputValue)){
            setDuration(inputValue)
        } else {
            triggerErrorShakeAnimation()
        }
    }
    
    return (
        <span
            className={isInputError ? 'animate errorShake' : ''}
            style={{ display: 'inline-flex' }}
        >
            <input
                type='text'
                inputMode="numeric"
                placeholder='--'
                size={2}
                value={duration}
                onChange={handleInputOnChange}
            />
            <label>{label}</label>
        </span>
    )
}

export default TimeInput