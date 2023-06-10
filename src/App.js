import { FaPause, FaPalette } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <main className="timerDeck">

        {/* Active Timer */}
        <div className="timerCard">
          <div className='timerCardTopRowContainer'>
            <button className='colorCycleButton topRowButton'>
              <FaPalette size={20} />
            </button>
            <button className='deleteButton topRowButton'>
              X
            </button>
          </div>
          <h2 className="timerCardTitle">Washing machine</h2>
          <p className='timer'>01 d : 23 h : 42 s</p>
          <button className='togglePausePlayButton'>
            <FaPause size={20} />
          </button>
        </div>

        {/* New Timer Input */}
        <div className="timerCard inactive">
          <form>
            <input className='titleInput' type='text' placeholder='Timer Name' />
            <div className='timeInputContainer'>
              <span style={{display: 'inline-flex'}}>
                <input type='text' placeholder='--' size={2}/>
                <label>&nbsp;d :&nbsp;</label>
              </span>
              
              <span style={{display: 'inline-flex'}}>
              <input type='text' placeholder='--' size={2}/>
              <label>&nbsp;h :&nbsp;</label>
              </span>

              <span style={{display: 'inline-flex'}}>
              <input type='text' placeholder='--' size={2}/>
              <label>&nbsp;s</label>
              </span>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
