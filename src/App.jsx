//import react-router dom
import { Routes, Route } from "react-router-dom"

//import halaman
import LandingPage from "./pages/Customer/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/Customer/RegisterPage"
import HomePage from "./pages/Customer/HomePage"
import MeetingPage from "./pages/Customer/MeetingPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/ruang-meeting" Component={MeetingPage} />
      </Routes>
    </>
  )
}

export default App
