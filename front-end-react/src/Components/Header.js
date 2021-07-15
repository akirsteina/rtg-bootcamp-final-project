
import '../Assets/Css/navigation.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment  } from '@fortawesome/free-solid-svg-icons';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { faHome  } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/Images/logo.png';


function Header() {

    

    return (
        <div className="container-fluid hero-image-wrapper">
            <nav className="navbar nav-wrapper justify-content-center justify-content-sm-between">
                <NavLink className="navbar-brand ps-5" to="/">
                    <img src={logo} alt="" className="logo-img px-2"></img>
                    </NavLink>
                <div className="navbar-nav d-flex flex-row justify-content-end px-5 fs-4" id="navbarNav">
                    <NavLink className="nav-link text-center mx-2" exact to="/">
                        <div className="nav-title">Home</div>
                        <div className="nav-icon"><FontAwesomeIcon icon={faHome} /></div>

                        </NavLink>
                    <NavLink className="nav-link text-center mx-2" to="/articles">
                        <div className="nav-title">Articles</div>
                        <div className="nav-icon"><FontAwesomeIcon icon={faBars} /></div>

                        </NavLink>
                    <NavLink className="nav-link text-center mx-2" to="/forum">
                        <div className="nav-title">Forum</div>
                        <div className="nav-icon"><FontAwesomeIcon icon={faComment} /></div>

                        </NavLink>
                    <NavLink className="nav-link text-center mx-2" to="/login">
                        <div className="nav-title">Profile</div>
                        <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                        </NavLink>
                    <NavLink className="nav-link text-center mx-2" to="/about">
                        <div className="nav-title">About</div>
                        <div className="nav-icon"><FontAwesomeIcon icon={faQuestion} /></div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header;