
const DeleteButton = ({handleDelete}) => {
    return (
        <button className='deleteButton topRowButton' onClick={handleDelete}>
            X
        </button>
    )
}

export default DeleteButton