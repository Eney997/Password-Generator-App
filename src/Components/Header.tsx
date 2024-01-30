import styled from "styled-components"
import copyImg from '../public/copyPick.svg'

const Header = () => {
  return (
    <Tavi>
        <Tavieihi>Password Generator</Tavieihi>
        <TaviInput name="getterPass" type="text" maxLength={15}></TaviInput>
        <CpImg src={copyImg}/>
    </Tavi>
  )
}

export default Header

const Tavi = styled.header`
display: grid;
place-items: center;
margin-top: 64px;
`
const Tavieihi = styled.h1`
color: #817D92;
text-align: center;
font-family: "JetBrains Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const TaviInput = styled.input`
color: var(--Almost-White, #E6E5EA);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "JetBrains Mono";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 16px;
width: 343px;
height: 64px;
flex-shrink: 0;
background:  #24232C;
outline: none;
border: none;
padding-left: 5px;
`
const CpImg = styled.img`
    margin-left: 300px;
    margin-top: -66px;
    cursor: pointer;
`
