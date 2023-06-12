import { FaPalette } from "react-icons/fa"

const ColorCycleButton = ({ handleNextColor, handleClickAnimation }) => {
    return (
        <button className='colorCycleButton topRowButton' onClick={() => {
            handleNextColor()
            handleClickAnimation()
            }} >
            <FaPalette size={20} />
        </button>
    )
}

export default ColorCycleButton