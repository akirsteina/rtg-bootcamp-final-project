import Breadcrumbs from '../Components/Breadcrumbs';
import Form from '../Components/Profile/Form';

function Login() {

    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { label: 'Your profile' },
    ];

    return (
        <div className="container">
            <div className="row pt-5 mt-5 mb-5">
                <div className="col-12 breadcrumbs">
                    <Breadcrumbs paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 col-lg-6 offset-lg-3 special-quote p-5 rounded my-2">
                    <h3 className="special-title main-header mb-3">Sign up now!</h3>
                   <Form/>
                </div>
            </div>
        </div>
    )
}

export default Login;