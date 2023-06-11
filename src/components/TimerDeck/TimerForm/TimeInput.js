

const TimeInput = ({ duration, setDuration, label }) => {
    return (
        <span style={{ display: 'inline-flex' }}>
            <input 
            type='text' 
            placeholder='--' 
            size={2}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            />
            <label>{label}</label>
        </span>
    )
}

export default TimeInput