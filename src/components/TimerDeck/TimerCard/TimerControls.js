import ColorCycleButton from "./ColorCycleButton"
import DeleteButton from "./DeleteButton"
import ToggleMuteButton from "./ToggleMuteButton"

const TimerControls = ({
    handleDelete, handleNextColor, handleClickAnimation, handleToggleMute, isMuted
}) => {
    return (
        <div className='card-controls-container'>
            <div className="left-btns-container">
                <ColorCycleButton
                    handleNextColor={handleNextColor}
                    handleClickAnimation={handleClickAnimation}
                />
                <ToggleMuteButton 
                    handleToggleMute={handleToggleMute}
                    handleClickAnimation={handleClickAnimation}
                    isMuted={isMuted}
                />
            </div>
            <DeleteButton handleDelete={handleDelete} />
        </div>
    )
}

export default TimerControls