
import {NavLink} from 'react-router-dom';

function Page404() {

    return (
        <div className="container page404 d-flex justify-content-center flex-column">
            <div className="row py-5 align-content-center">
                <div className="col-6 offset-3 text-center">
                    <h1>Whoops...</h1>
                    <p className="lead">Looks like something went wrong!</p>
                    <NavLink className="btn btn-primary mx-2" to="/" role="button">Go back home</NavLink>
                    <NavLink className="btn border-danger mx-2" to="/" role="button">Report an error</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Page404;