import { FaVolumeMute, FaVolumeUp } from "react-icons/fa"

const ToggleMuteButton = ({ handleClickAnimation, handleToggleMute, isMuted }) => {
    return (
        <button onClick={() => {
            handleToggleMute()
            handleClickAnimation()
        }}>
            {!isMuted &&
                <FaVolumeUp size={20} />
            }
            {isMuted && 
                <FaVolumeMute size={20} />
            }
        </button>
    )
}

export default ToggleMuteButton