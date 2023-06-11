import { FaPalette } from "react-icons/fa"

const ColorCycleButton = ({ handleNextColor }) => {
    return (
        <button className='colorCycleButton topRowButton' onClick={handleNextColor} >
            <FaPalette size={20} />
        </button>
    )
}

export default ColorCycleButton