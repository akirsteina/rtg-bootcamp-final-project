
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Articles() {

    const [articles, setArticles] = useState({
        loading: true,
        items: [],
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const loadArticles = async () => {
        setArticles({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8072/articles';
            const response = await axios.get(url);
            setArticles({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Whoops, something went wrong!');
            setArticles({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadArticles();
    }, []);

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;

    let content = <FontAwesomeIcon icon={faSpinner} spin/>;
    if (!articles.loading && articles.items.length === 0) {
        content = <h5> Something went wrong </h5>;   
    } else if (!articles.loading) {
        content = articles.items.map((article, index) => {
            return (
                <div key={index} className="col-12 col-sm-6 col-md-4 pb-2">
                    <div className="card">
                        <NavLink to={`/articles/${article._id}`} className="card-element">
                            <img src={article.mainImage} className="card-img-top" alt="" />
                            <div className="card-body card-img-overlay">
                            <button className="btn articles-btn fw-bold" to="/articles">Read more</button>
    
                            </div>
                        </NavLink>
                    </div>
                    <NavLink to={`/articles/${article._id}`}><h5 className="text-center pt-3 text-uppercase card-articles-title">{article.title}</h5></NavLink>
                    <p className="lead text-center text-light">{article.shortDescription}</p>
                    <span className="badge main-page-badge">By {article.author}</span>
                </div>
            )
        })
    }



    return (
        <main>
            <div className="container">
                <div className="row py-5 my-5">
                    <div className="col">
                        {content}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Articles;