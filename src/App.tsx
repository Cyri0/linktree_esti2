import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import UserPage from "./pages/UserPage"
import Pokemon from "./pages/Pokemon"

// sziasztok
// mizu
// konflitus

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user/:username" element={<UserPage/>} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/user/:username/:id" element={<UserPage/>} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App