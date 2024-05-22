
import StartGame from "./components/StartGame"
import { useState } from "react"
import GamePlay from "./components/GamePlay"



function App() {
  
const [isGameStarted,setIsGameStarted]=useState(false)
const toggleGameplay =()=>{
  setIsGameStarted(!isGameStarted)
}
  return (
   <div>
    
    {isGameStarted ? <GamePlay/> :<StartGame toggle={toggleGameplay}/>}
    
   </div>
  )
}

export default App

