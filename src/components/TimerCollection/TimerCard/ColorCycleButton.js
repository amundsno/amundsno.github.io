import { MdPalette } from "react-icons/md"
import { useContext } from "react"
import TimerContext from "../../../context/TimerContext"

const ColorCycleButton = ({ handleNextColor, handleClickAnimation }) => {
    const {ICON_SIZE} = useContext(TimerContext)
    return (
        <button className='colorCycleButton' onClick={() => {
            handleNextColor()
            handleClickAnimation()
            }} >
            <MdPalette size={ICON_SIZE} />
        </button>
    )
}

export default ColorCycleButton