import { MdVolumeUp, MdVolumeMute } from "react-icons/md"
import { useContext } from "react"
import TimerContext from "../../../context/TimerContext"

const ToggleMuteButton = ({ handleClickAnimation, handleToggleMute, isMuted }) => {
    const {ICON_SIZE} = useContext(TimerContext)
    return (
        <button onClick={() => {
            handleToggleMute()
            handleClickAnimation()
        }}>
            {!isMuted &&
                <MdVolumeUp size={ICON_SIZE} />
            }
            {isMuted && 
                <MdVolumeMute size={ICON_SIZE} />
            }
        </button>
    )
}

export default ToggleMuteButton