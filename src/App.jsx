import About from "./Components/About/About"
import { Hero } from "./Components/Hero/Hero"
import Navbar from "./Components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  )
}

export default App