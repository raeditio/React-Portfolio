import { Link } from 'react-router-dom';
import './NavbarLinkedIn.css';

function NavbarLinkedIn({ onMouseEnter }) {
    return (
      <div onMouseEnter={onMouseEnter}>
        <Link to="https://www.linkedin.com/in/ryanjung0/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-icon" />
        </Link>
      </div>
    );
  }

  export default NavbarLinkedIn;