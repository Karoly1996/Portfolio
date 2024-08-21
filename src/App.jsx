import About from "./Components/About/About"
import { Hero } from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import Navbar from "./Components/navbar/Navbar"
import Services from "./Components/Services/Services"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
    </div>
  )
}

export default App