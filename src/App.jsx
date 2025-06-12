import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/storia" element={<About />} />
          <Route path="/contatti" element={<Contacts />} />
          <Route path="/progetti" element={<Projects />} />
          <Route path="/progetti/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

