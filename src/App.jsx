import { Route, Routes } from "react-router-dom"
import Navbar from "./components/nav/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Work from "./pages/work/Work"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"  element={ <Home />}/>
        <Route path="/about"  element={ <About />}/>
        <Route path="/work"  element={ <Work />}/>
        <Route path="/contact"  element={ <Contact />}/>
      </Routes>
    </div>
  )
}

export default App
