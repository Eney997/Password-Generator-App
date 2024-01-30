import styled from "styled-components"

const Generate = () => {
  return (
    <Gendiv>
        <Genbut><Genspan>GENERATE</Genspan></Genbut>
    </Gendiv>
  )
}

export default Generate

const Gendiv = styled.div`
    position: absolute;
    margin-top: 355px;
    margin-left: 16px;
`
const Genbut = styled.button`
width: 311px;
height: 56px;
flex-shrink: 0;
background: var(--Neon-Green, #A4FFAF);
border: none;
outline: none;
cursor: pointer;
`

const Genspan = styled.span`
color: var(--Dark-Grey, #24232C);
text-align: center;
font-family: "JetBrains Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

