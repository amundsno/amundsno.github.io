

const TitleInput = ({ title, setTitle, titleRef }) => {
    return (
        <input
            autoFocus={true}
            className='titleInput'
            name="timerTitle"
            type='text'
            placeholder='Timer Name'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            ref={titleRef}
        />
    )
}

export default TitleInput