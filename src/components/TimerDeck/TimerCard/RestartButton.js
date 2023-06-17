import { MdRestore } from "react-icons/md"
import { useContext } from "react"
import TimerContext from "../../../context/TimerContext"

const RestartButton = ({ handleRestart, handleClickAnimation }) => {
    const { ICON_SIZE } = useContext(TimerContext)
    return (
        <button onClick={() => {
            handleClickAnimation()
            handleRestart()
        }}>
            <MdRestore size={ICON_SIZE} />
        </button>
    )
}

export default RestartButton