import styled from "styled-components"
import defSvg from '../public/defoultS.svg'

const Strength = () => {
  return (
    <Strdiv>
        <Strdivhone>STRENGTH</Strdivhone>
        <StrImg src={defSvg}></StrImg>
    </Strdiv>
  )
}

export default Strength

const Strdiv = styled.div`
    position: absolute;
    margin-top: 290px;
    width: 311px;
    height: 56px;
    background: #18171F;
    display: flex;
    margin-left: 16px;
`
const Strdivhone = styled.h1`
color: var(--Grey, #817D92);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: "JetBrains Mono";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 25px;
margin-top: 16px;
`
const StrImg = styled.img `
width: 63.5px;
height: 28px;
margin-left: 230px;
margin-top: 11px;
position: absolute;
`