
import styled from "styled-components"
const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    const arrayNumber = [1,2,3,4,5,6]

    const numberSelectorHandler = (v)=>{
      setSelectedNumber(v)
      setError("")

    }
  return (
    <NumberSelectorcontainer>
      <p className="error">{error}</p>
      <div className='flex'>
        {
            arrayNumber.map((v,i)=>(
<Box  isSelected={v===selectedNumber } key={i} onClick={()=>numberSelectorHandler(v)}>{v}</Box>
            ))
        }
</div>
<p>Select Number</p>
    </NumberSelectorcontainer>
  )
}

export default NumberSelector

const NumberSelectorcontainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
  display: flex;
  gap: 24px;
}
p{
  font-size: 24px;
  font-weight: 700;
}
.error{
  color: red;
}
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    background-color:${(props)=>(props.isSelected ? "black":"white")};
    color:${(props)=>(!props.isSelected ? "black":"white")};

`