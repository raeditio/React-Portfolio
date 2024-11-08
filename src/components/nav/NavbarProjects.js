import './NavbarProjects.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarProjects({ onMouseEnter}) {
    const isProjectsHovered = useSelector((state) => state.hover.isProjectsHovered);
    return (
        <div onMouseEnter={onMouseEnter}>
            <span>Projects</span>
            <div className={isProjectsHovered ? "dropdown-projects" : "fold-projects"}>
                <Link to="/projects/AI Vision" className="aiVision">AI Vision</Link>
                <Link to="/projects/smartDesk" className="smartDesk">Smart Desk</Link>
                <Link to="/projects/ifr6000" className="ifr6000">IFR 6000</Link>
                <Link to="/projects/projectA" className="projectA">Project A</Link>
                <Link to={"/projects"} className="viewAll">View All</Link>
            </div>
        </div>
    );
}

export default NavbarProjects;