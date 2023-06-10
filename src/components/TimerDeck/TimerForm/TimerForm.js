
const TimerForm = () => {
    return (
        <div className="timerCard inactive">
            <form>
                <input className='titleInput' type='text' placeholder='Timer Name' />
                <div className='timeInputContainer'>
                    <span style={{ display: 'inline-flex' }}>
                        <input type='text' placeholder='--' size={2} />
                        <label>&nbsp;d :&nbsp;</label>
                    </span>

                    <span style={{ display: 'inline-flex' }}>
                        <input type='text' placeholder='--' size={2} />
                        <label>&nbsp;h :&nbsp;</label>
                    </span>

                    <span style={{ display: 'inline-flex' }}>
                        <input type='text' placeholder='--' size={2} />
                        <label>&nbsp;s</label>
                    </span>
                </div>

            </form>
        </div>
    )
}

export default TimerForm