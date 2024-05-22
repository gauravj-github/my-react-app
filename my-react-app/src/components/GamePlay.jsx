import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
import RoleDice from './RoleDice'
import { Button} from '../styled/Button'
import { OutlineButton } from '../styled/Button'




const GamePlay = () => {
  const [score ,setscore]=useState(0)
  const [selectedNumber,setSelectedNumber]=useState(0)
  const [currentDice,setcurrentDice]=useState(1)
  const [error,setError]=useState("")



  const generateRandomNumber =  (min,max)=> {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min)
  };
const roleDice = () => {
  if(!selectedNumber) {
    setError("you have not selected any number")
    return
  }
  
  const randomNumber = generateRandomNumber(1,7)
  setcurrentDice(randomNumber)

  
  if (selectedNumber == randomNumber){
    setscore(score + randomNumber )
  }
  else{
    setscore(score - randomNumber)
  }

  setSelectedNumber(undefined)

}

  return (
    <MainContainer>
      <div className='top-section'>
      <TotalScore score={score}/>
      <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice}  roleDice={roleDice} />
      <div className="btns">
        <OutlineButton>Reset</OutlineButton>
        <Button>Show Rules</Button>

      </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
padding-top: 50px;
  .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
    

  }
  .btns{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`