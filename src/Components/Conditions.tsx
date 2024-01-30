import styled from "styled-components"


const Conditions = () => {
  return (
    <Sdiv>
    <Inputone name="firs" type="checkbox"></Inputone>
    <Hone>Include Uppercase Letters</Hone>
    <InputWto name="sec" type="checkbox"></InputWto>
    <Htwo>Include Lowercase Letters</Htwo>
    <Inputthre name="third" type="checkbox"></Inputthre>
    <Hthre>Include Numbers</Hthre>
    <Inputfour name="four" type="checkbox"></Inputfour>
    <Hfour>Include Symbols</Hfour>
    </Sdiv>
  )
}

export default Conditions

const Sdiv = styled.div `
margin-top: 133px;
position: absolute;
display: grid;
grid-template-areas:'one two'
                    'thre four'
                    'five six' 
                    'seven eight';
column-gap: 20px;
row-gap: 15px;
margin-left: 16px;

@media (width>768px){
  margin-left: 32px;
}
`
const Inputone = styled.input`
    grid-area: one;
    width:20px;
    height: 20px;
    outline: none;
    border: none;
`
const InputWto = styled.input`
    grid-area: thre;
    width:20px;
    height: 20px;
    outline: none;
    border: none;
`
const Inputthre = styled.input`
    grid-area: five;
    width:20px;
    height: 20px;
    outline: none;
    border: none;
`
const Inputfour = styled.input`
    grid-area: seven;
    width:20px;
    height: 20px;
    outline: none;
    border: none;
`
const Hone = styled.h1 `
grid-area:two ;
color: var(--Almost-White, #E6E5EA);
font-family: "JetBrains Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Htwo = styled.h2 `
grid-area:four ;
color: var(--Almost-White, #E6E5EA);
font-family: "JetBrains Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Hthre = styled.h3 `
grid-area:six ;
color: var(--Almost-White, #E6E5EA);
font-family: "JetBrains Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Hfour = styled.h4 `
grid-area:eight ;
color: var(--Almost-White, #E6E5EA);
font-family: "JetBrains Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`



