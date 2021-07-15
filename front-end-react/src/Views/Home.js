import '../Assets/Css/main.css';
import { NavLink } from 'react-router-dom';

function Home() {

    return (
        <main>
            <div className=""></div>
            <div className="container">
                <div className="row py-5 my-5 ">
                    <div className="col-6 offset-3">
                        <div className="text-center header-wrapper py-5 ">
                            <h1 className="mb-0 pt-1 main-header bg-dark"> Healthy Plants</h1>
                            <h2 className="mb-5 pb-1 bg-dark">We make sure you don't over-water your succulents</h2>
                            <div class="button-wrapper">
                                <NavLink to="/articles">
                                    <p class="animated-word">Discover!</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid content-wrapper">
                <div className="row pt-5 my-5">
                    <div className="col pt-5">
                        This is Home
                    </div>
                </div>
                <div className="row pt-5 my-5">
                    <div className="col pt-5">

                    </div>
                </div>
                <div className="row pt-5 my-5">
                    <div className="col pt-5">
                        This is Home
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col pt-5">
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;