
const TogglePauseButton = ({ handleTogglePausePlay, Icon, handleClickAnimation }) => {
    return (
        <button
            className='toggle-pause-btn'
            onClick={() => {handleTogglePausePlay(); handleClickAnimation();}}
        >
            <Icon size={20} />
        </button>
    )
}

export default TogglePauseButton