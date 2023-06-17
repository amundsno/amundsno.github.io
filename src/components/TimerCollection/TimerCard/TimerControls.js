import ColorCycleButton from "./ColorCycleButton"
import DeleteButton from "./DeleteButton"
import RestartButton from "./RestartButton"
import ToggleMuteButton from "./ToggleMuteButton"

const TimerControls = ({
    handleDelete, handleRestart, handleNextColor, handleClickAnimation, handleToggleMute, isMuted
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
            <div className="right-btns-container">
                <RestartButton
                    handleRestart={handleRestart}
                    handleClickAnimation={handleClickAnimation}
                />
                <DeleteButton handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default TimerControls