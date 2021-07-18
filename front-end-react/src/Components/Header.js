
import '../Assets/Css/style.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faHome, faBars, faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/Images/logo.png';


function Header() {

    return (
        <div className="container-fluid hero-image-wrapper">
            <nav className="navbar nav-wrapper justify-content-center justify-content-sm-between">
                <NavLink className="navbar-brand ps-5" to="/">
                    <img src={logo} alt="" className="logo-img px-2"></img>
                </NavLink>
                <div className="navbar-nav d-flex flex-row justify-content-end px-5 fs-4" id="navbarNav">
                    {/* home */}
                    <NavLink className="nav-link text-center mx-2 nav-title" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link text-center mx-2 nav-icon" exact to="/">
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                    {/* articles */}
                    <NavLink className="nav-link text-center mx-2 nav-title" to="/articles">
                        Articles
                    </NavLink>
                    <NavLink className="nav-link text-center mx-2 nav-icon" to="/articles">
                        <FontAwesomeIcon icon={faBars} />
                    </NavLink>
                    {/* forum */}
                    <NavLink className="nav-link text-center mx-2 nav-title" to="/forum">
                        Forum
                    </NavLink>
                    <NavLink className="nav-link text-center mx-2 nav-icon" to="/forum">
                        <FontAwesomeIcon icon={faComment} />
                    </NavLink>
                    {/* profile */}
                    <NavLink className="nav-link text-center mx-2 nav-title" to="/login">
                        Profile
                    </NavLink>
                    <NavLink className="nav-link text-center mx-2 nav-icon" to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    {/* about */}
                    <NavLink className="nav-link text-center mx-l nav-title" to="/about">
                        About
                    </NavLink>
                    <NavLink className="nav-link text-center mx-2 nav-icon" to="/about">
                        <FontAwesomeIcon icon={faQuestion} />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header;