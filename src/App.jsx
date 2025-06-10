import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contatti" element={<Contacts />} />
          <Route path="/progetti" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
