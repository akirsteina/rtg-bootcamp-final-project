import '../Assets/Css/main.css';
import { NavLink } from 'react-router-dom';
import carousel1 from '../Assets/Images/carousel1.jpg';
import carousel2 from '../Assets/Images/carousel2.jpg';
import carousel3 from '../Assets/Images/carousel3.jpg';

function Home() {

    const articles = [
        { title: 'Best potting mixes for your succulents: is perlite really that good?', id: 'potting-mixes', image: carousel1, shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { title: 'Plastic pots - no more!', id: 'plastic-pots', image: carousel2, shortDescription: "Vel quo laudantium enim tempore explicabo harum earum ipsa?" },
        { title: '10 hottest succulents of this summer', id: 'hottest-succulents', image: carousel3, shortDescription: "Facilis fuga, vero voluptas dicta fugiat consectetur dolor, placeat nulla reprehenderit earum porro." },
    ]

    const articlesCards = articles.map((article, index) => {
        return (
            <div key={index} className="col-12 col-sm-6 col-md-4 pb-2">
                <div className="card">
                    <NavLink to={`/articles/${article.id}`} className="card-element">
                        <img src={article.image} className="card-img-top" alt="" />
                        <div className="card-body card-img-overlay">
                        <button className="btn articles-btn fw-bold" to="/articles">Read more</button>

                        </div>
                    </NavLink>
                </div>
                <NavLink to={`/articles/${article.id}`}><h5 className="text-center pt-3 text-uppercase card-articles-title">{article.title}</h5></NavLink>
                <p className="lead text-center text-light">{article.shortDescription}</p>
                
            </div>
        )
    })

    return (
        <main>
            <div className=""></div>
            <div className="container">
                <div className="row py-5 my-5">
                    <div className="col-6 offset-3">
                        <div className="text-center header-wrapper">
                            <h1 className="pt-1 mb-5 main-header head-info">Happy Plants</h1>
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
                        <h1 className="display-4 pt-2 main-header special-title">Happy Plants at your home</h1>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-lg-5 offset-lg-1 about-txt px-3 pt-3">
                        <div className="quotes start-quotes text-start"></div>
                        <blockquote className="blockquote text-center pt-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente voluptatem tempora necessitatibus rem reprehenderit minus, tempore, sint aliquam odio, architecto commodi facilis. Nemo eaque, eius dignissimos totam possimus ducimus?</p>
                        </blockquote>
                        <figcaption className="blockquote-footer text-center">
                            A famous quote from <cite title="Source Title">The plant lovers</cite>
                        </figcaption>
                        <div className="d-flex justify-content-end">
                            <div className="quotes end-quotes"></div>
                        </div>
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
                <div className="row pt-5 articles-row">
                    <div className="col-10 offset-1">
                        <h1 className="main-header text-center text-light">Read all the newest articles!</h1>
                        <div className="row py-5 d-flex justify-content-center">
                            {articlesCards}
                            <div className="col-12 text-end pt-4">
                                <NavLink className="btn articles-btn fw-bold" to="/articles">See all articles</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-2 text-center py-3">
                        <h3 className="main-header ">Subscribe</h3>
                        <form>
                            <div className="mb-3">
                                <label for="email-input" className="form-label text-muted">Enter your e-mail address</label>
                                <input type="email" className="form-control" id="email-input" />
                                <div id="emailHelp" className="form-text">Get the newest articles, insights into potting, and more!</div>
                                <button className="btn main-page-btn fw-bold my-3">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Home;