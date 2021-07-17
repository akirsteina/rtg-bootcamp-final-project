
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleItem from '../Components/ArticleItem';
import Pagination from '../Components/Pagination';
import Breadcrumbs from '../Components/Breadcrumbs';
import '../Assets/Css/articles.css';

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(3);

    const loadArticles = async () => {
        setLoading(true);
        try {
            const url = 'http://localhost:8072/articles';
            const response = await axios.get(url);
            setArticles(response.data);
            setLoading(false);
        } catch (e) {
            alert('Whoops, something went wrong!');
            setArticles([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadArticles();
    }, []);

    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { label: 'Articles' },
    ];

    // get current posts
    const indexOfLastPost = currentPage * articlesPerPage;
    const indexOfFirstPost = indexOfLastPost - articlesPerPage;
    let currentPosts;
    if (!loading) {
        currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
    }

    // Change pages
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    return (
        <main>
            <div className="container">
                <div className="row py-5 my-5">
                    <div className="col-12 breadcrumbs">
                        <Breadcrumbs paths={breadcrumbPaths} />
                    </div>

                </div>
            </div>
            <div className="container-fluid content-wrapper">
                <div className="col-12 col-md-8 offset-md-2">
                    <Pagination
                        articlesPerPage={articlesPerPage}
                        totalArticles={articles.length}
                        paginate={paginate}
                    />
                    <ArticleItem articles={currentPosts} loading={loading} />
                </div>
            </div>
        </main>
    )
}

export default Articles;