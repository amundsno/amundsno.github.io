import TimerContext from "../../context/TimerContext"
import TimerCard from "./TimerCard/TimerCard"
import TimerForm from "./TimerForm/TimerForm"

import { useContext } from "react"

const TimerDeck = () => {

    const {timers, setTimers} = useContext(TimerContext)

  return (
    <main className="timerDeck">
        {timers.length && timers.map((timer) => (
            <TimerCard id={timer.id} key={timer.id}/>
        ))}
        
        <TimerForm />
      </main>
  )
}

export default TimerDeck