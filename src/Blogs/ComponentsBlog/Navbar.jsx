import "../ComponentsBlog/Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">Blogs</NavLink>
          <button className="navbar-toggle" onClick={toggleMenu}>
            <span className="navbar-toggle-icon">
              <IoMenu className="text-white" />
            </span>
          </button>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              AllBlogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/CreateBlog" onClick={toggleMenu}>
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/EditBlog" onClick={toggleMenu}>
              Edit
            </NavLink>
          </li>
          <li>
            <NavLink to="/SingleBlog" onClick={toggleMenu}>
              SingleBlog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
