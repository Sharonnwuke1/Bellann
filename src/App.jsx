import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Wholesale from "./pages/wholesale"
import Login from "./pages/Login" 

import {Routes,Route} from "react-router-dom"
function App(){
  return(
  <>
  <Navbar/>
     <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Wholesale" element={<Wholesale />} />
      <Route path="/Login" element={<Login />} />
     </Routes>
  </>
    
  )
}
export default App