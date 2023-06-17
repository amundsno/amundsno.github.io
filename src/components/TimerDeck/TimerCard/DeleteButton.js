import { MdClose } from "react-icons/md"
import { useContext } from "react"
import TimerContext from "../../../context/TimerContext"

const DeleteButton = ({handleDelete}) => {
    const {ICON_SIZE} = useContext(TimerContext)
    return (
        <button onClick={handleDelete}>
            <MdClose size={ICON_SIZE} />
        </button>
    )
}

export default DeleteButton

