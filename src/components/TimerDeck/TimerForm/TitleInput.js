

const TitleInput = ({ title, setTitle, titleRef, maxLength }) => {
    return (
        <input
            autoFocus={true}
            maxLength={maxLength}
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