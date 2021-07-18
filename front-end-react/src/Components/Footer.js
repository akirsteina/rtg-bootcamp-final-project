import footerImg from '../Assets/Images/footer-img.png';
import SocialIcons from './SocialIcons';

function Footer() {
    return (
        <footer className="footer container-fluid">
            <div className="row">
                <div className="col-11 offset-1 col-md-5 offset-md-2 col-lg-2 offset-lg-2 special-footer-col d-flex align-items-end justify-content-center">
                    <img src={footerImg} className="footer-img" alt=""></img>
                </div>
                <div className="col-11 offset-1 col-md-5 offset-md-0 col-lg-4 offset-lg-0 footer-middle-col py-3 d-flex align-items-center justify-content-center">
                    <SocialIcons />
                </div>
                <div className="col-11 offset-1 col-md-11 offset-md-2 col-lg-4 offset-lg-0 footer-end-col py-3 d-flex align-items-center justify-content-center">
                    <span className="no-special-font">&copy;</span> Happy Plants 2021
                </div>
            </div>
        </footer>

    )
}

export default Footer;

