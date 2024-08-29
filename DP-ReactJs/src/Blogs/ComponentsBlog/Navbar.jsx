import "../ComponentsBlog/Navbar.css";

const Navbar = () => {
  return (
    <div>
          <nav className="navbar">
        <div className="navbar-logo">
            <a href="#">Blogs</a>
        </div>
        <ul className="navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
      
    </div>
  )
}

export default Navbar
