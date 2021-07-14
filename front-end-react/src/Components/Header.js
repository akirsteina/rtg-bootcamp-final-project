
import '../Assets/Css/navigation.css';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';


function Header() {

    return (
        <div className="container-fluid nav-wrapper">
            <nav className="navbar navbar-expand-sm navbar-light px-5">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/articles">Articles</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/forum">Forum</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-center" to="/about"><div>About</div><div><FontAwesomeIcon icon={faQuestion}/></div></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;