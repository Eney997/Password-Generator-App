import Globalstyle from "./Components/Globalstyle"
import Header from "./Components/Header"
import Lengthcont from "./Components/Lengthcont"
import Cnditions from "./Components/Conditions"
import Strength from "./Components/Strength"
import Generate from "./Components/Generate"

function App() {
  

  return (
    <>
    <Header/>
    <Lengthcont>
      <Cnditions/>
      <Strength/>
      <Generate/>
    </Lengthcont>
    <Globalstyle/>
    </>
  )
}

export default App
