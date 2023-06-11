
const TogglePausePlayButton = ({ handleTogglePausePlay, Icon }) => {
    return (
        <button
            className='togglePausePlayButton'
            onClick={handleTogglePausePlay}
        >
            <Icon size={20} />
        </button>
    )
}

export default TogglePausePlayButton