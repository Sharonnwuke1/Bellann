import { Link } from "react-router-dom"
function Navbar() {
  return (
   
      <header>
        <h1> Bellaann </h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/wholesale">Wholesale</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login" >Login</Link>
        </nav>
      </header>
    
  )
}

export default Navbar