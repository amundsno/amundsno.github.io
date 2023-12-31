import TimerContext from "../../context/TimerContext"
import TimerCard from "./TimerCard/TimerCard"
import TimerForm from "./TimerForm/TimerForm"

import { useContext } from "react"

const TimerCollection = () => {

    const {timers, setTimers} = useContext(TimerContext)

  return (
    <main className="timer-deck">
        {timers.length > 0 && timers.map((timer) => (
            <TimerCard id={timer.id} key={timer.id}/>
        ))}
        
        <TimerForm />
        {!timers.length &&
        <p className="instructions">
            Give your timer a name, <br />
            TAB to enter duration, <br />
            ENTER to start
        </p>
        }
      </main>
  )
}

export default TimerCollection