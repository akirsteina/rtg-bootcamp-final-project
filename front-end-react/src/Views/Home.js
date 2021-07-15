import '../Assets/Css/main.css';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import carousel1 from '../Assets/Images/carousel1.jpg';
import carousel2 from '../Assets/Images/carousel2.jpg';
import carousel3 from '../Assets/Images/carousel3.jpg';

function Home() {

    return (
        <main>
            <div className=""></div>
            <div className="container">
                <div className="row py-5 my-5">
                    <div className="col-6 offset-3">
                        <div className="text-center header-wrapper">
                            <h1 className="mb-0 pt-1 mb-5 main-header head-info">Happy Plants</h1>
                            <div class="button-wrapper">
                                <NavLink to="/articles">
                                    <p class="animated-word">Discover!</p>
                                </NavLink>
                            </div>
                            <h2 className="pt-4 mt-1 head-info">We make sure you don't over-water your succulents</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid content-wrapper">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h1 className="display-4 main-header special-title"> Happy Plants at your home</h1>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12 col-lg-5 offset-lg-1 about-txt text-center px-3 pt-3">
                        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quibusdam delectus recusandae unde pariatur veritatis aliquid quo esse aliquam. Inventore ratione suscipit, explicabo eius quaerat impedit velit iste sunt aliquam! Inventore ratione suscipit, explicabo eius quaerat impedit velit iste sunt aliquam! Inventore ratione suscipit, explicabo eius quaerat impedit velit iste sunt aliquam!</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium ullam dolores porro voluptas enim officiis sit rerum sint quibusdam. Libero incidunt nisi quis architecto quas sunt quos animi ullam!</p>
                    
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center">
                        <div id="carouselExampleControls" className="carousel slide carousel-fade d-flex align-items-center" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={carousel1} className="d-block w-100 rounded-circle" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel2} className="d-block w-100 rounded-circle" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel3} className="d-block w-100 rounded-circle" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 my-5 articles-row">
                    <div className="col">
                        Carousel
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col pt-5">
                        Articles
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;