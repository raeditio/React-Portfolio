import './NavbarContact.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarContact({ onMouseEnter }) {
    const isContactHovered = useSelector((state) => state.hover.isContactHovered);
    
    return (
        <div onMouseEnter={onMouseEnter}>
          <span>Contact</span>
          <div className={isContactHovered ? "dropdown-contact" : "fold-contact"}>
            <Link to="mailto:ryankwjung@gmail.com" className="email">ryankwjung@gmail.com</Link>
            <Link to="tel:604-726-1758" className="phone">(604) 726-1758</Link>
            <Link to={"/contact"}>Contact Form</Link>
          </div>
        </div>
    )
}

export default NavbarContact;