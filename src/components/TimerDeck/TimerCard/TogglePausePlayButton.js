
const TogglePausePlayButton = ({ handleTogglePausePlay, Icon, handleClickAnimation }) => {
    return (
        <button
            className='togglePausePlayButton'
            onClick={() => {handleTogglePausePlay(); handleClickAnimation();}}
        >
            <Icon size={20} />
        </button>
    )
}

export default TogglePausePlayButton