import React from 'react'
import styled from "styled-components"
import "../App.css"
import { Button } from '../styled/Button'


const StartGame = ({toggle}) => {
  return (
    <div className='c'>
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>
    <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
    </Container>
    </div>
  )
}

export default StartGame

const Container = styled.div`
max-width:1180px;
background-color: gray;
display: flex;
margin: 0 auto;
align-items: center;
height: 100vh;

.content h1{
font-size: 96px;
}

`
