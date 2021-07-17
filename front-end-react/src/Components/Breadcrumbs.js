import {NavLink} from 'react-router-dom';

function Breadcrumbs({ paths }) {
    const links = paths.map((path, index) => {
        if (path.link) {
            return <li key={index} className="breadcrumb-item fw-bolder"><NavLink to={path.link}>{path.label}</NavLink></li>
        }
        return <li key={index} className="breadcrumb-item active" aria-current="page">{path.label}</li>
    })

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb my-2">
                {links}
            </ol>
        </nav>

    )
}

export default Breadcrumbs;