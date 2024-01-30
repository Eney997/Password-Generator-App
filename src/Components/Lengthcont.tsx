import styled from "styled-components"

const Lengthcont = (props:any) => {
  return (
    <Maindiv>{props.children}
      <Mainhone>Character Length</Mainhone>
      <Mainhsec>10</Mainhsec>
      <Sliderinput type="range"  maxLength={15}></Sliderinput>
    </Maindiv>
  )
}

export default Lengthcont

const Maindiv = styled.div`
width: 343px;
height: 423px;
flex-shrink: 0;
background: #24232C;
margin-top: 16px;

`
const Mainhone = styled.h1`
color: var(--Almost-White, #E6E5EA);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "JetBrains Mono";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
margin-top: 21px;
margin-left: 16px;
`
const Mainhsec = styled.h2`
color: var(--Neon-Green, #A4FFAF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "JetBrains Mono";
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 290px;
position: absolute;
margin-top: 10px;
`
const Sliderinput = styled.input`
 background: #18171F;
 width: 311px;
height: 8px;
flex-shrink: 0;
position: absolute;
margin-top: 80px;
margin-left: 16px;
`