import { useDispatch, useSelector } from 'react-redux';
import { ToggleHoverOff, setProjectsHover, setContactHover } from '../../redux/hoverSlice.js';
import { Link } from 'react-router-dom';

import NavbarProjects from './NavbarProjects.js';
import NavbarContact from './NavbarContact.js';
import NavbarLinkedIn from './NavbarLinkedIn.js';

import "./Navbar.css";

function Navbar() {
    const brand = "Ryan Jung";

    const isProjectsHovered = useSelector((state) => state.hover.isProjectsHovered);
    const isContactHovered = useSelector((state) => state.hover.isContactHovered);
    const isHovered = isProjectsHovered || isContactHovered;
    const dispatch = useDispatch();
  
    return (
      <nav 
        className={isHovered ? "hovered" : ""}
        onMouseLeave={() => dispatch(ToggleHoverOff())}
      >
        <div className="nav-brand">
          <h1><a href="/">{brand}</a></h1>
        </div>
        <div className="nav-links">
          <NavbarProjects onMouseEnter={() => dispatch(setProjectsHover(true))} />
          <NavbarContact onMouseEnter={() => dispatch(setContactHover(true))} />
          <div>
            <Link
              to="/about"
              className="nav-about"
              onMouseEnter={() => dispatch(ToggleHoverOff())}>
              About
            </Link>
          </div>
          <NavbarLinkedIn onMouseEnter={() => dispatch(ToggleHoverOff())} />
        </div>
      </nav>
    );
  }

  export default Navbar;