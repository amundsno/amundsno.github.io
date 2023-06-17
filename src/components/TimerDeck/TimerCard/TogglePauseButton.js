
const TogglePauseButton = ({ handleTogglePause, Icon, handleClickAnimation }) => {
    return (
        <button
            className='toggle-pause-btn'
            onClick={() => {handleTogglePause(); handleClickAnimation();}}
        >
            <Icon size={20} />
        </button>
    )
}

export default TogglePauseButton