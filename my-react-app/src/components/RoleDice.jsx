
import styled from 'styled-components'

const RoleDice = ({currentDice,roleDice}) => {
  
  return (
    <DiceCotainer>
      <div className='dice'  onClick={roleDice}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt="dice-1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceCotainer>
  )
}

export default RoleDice
const DiceCotainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
 margin-top: 48px;
 .dice{
  cursor: pointer;
 }
 p{
  font-size: 24px;

 }
  
`