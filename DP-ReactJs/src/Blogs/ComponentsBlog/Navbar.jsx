import "../ComponentsBlog/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
          <nav className="navbar">
        <div className="navbar-logo">
            <NavLink to="/">Blogs</NavLink>
        </div>
        <ul className="navbar-menu">
            <li><NavLink to='/'>AllBlogs</NavLink></li>
            <li><NavLink to="/CreateBlog">Create</NavLink></li>
            <li><NavLink to="/EditBlog">Edit</NavLink></li>
            <li><NavLink to="/SingleBlog">SingleBlog</NavLink></li>
        </ul>
    </nav>
      
    </div>
  )
}

export default Navbar
