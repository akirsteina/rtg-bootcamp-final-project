
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleItem from '../Components/Articles/ArticleItem';
import Pagination from '../Components/Articles/Pagination';
import Breadcrumbs from '../Components/Breadcrumbs';
import '../Assets/Css/style.css';

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
        currentPosts = [...articles].reverse().slice(indexOfFirstPost, indexOfLastPost);
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
                <div className="row py-5 my-5 special-quote">
                    <div className="col-12 col-lg-8">
                        <h1 className="main-header text-center display-4 pb-3">Editor's column</h1>
                        <p className="lead px-5">Irony PBR&B sustainable, pour-over vinyl woke cliche air plant literally hashtag art party. Hot chicken sustainable freegan woke tacos franzen literally portland four loko kinfolk. Literally pabst vaporware, food truck yuccie bicycle rights PBR&B offal tilde pok pok. Microdosing hammock health goth occupy gluten-free, polaroid single-origin coffee kitsch jianbing chartreuse seitan ethical.
                        </p>
                        <p className="lead px-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ratione reprehenderit nesciunt amet, blanditiis in ut veniam reiciendis minima quis eum odio commodi. Ipsam quis pariatur, tempore at aperiam dolore!
                        </p>
                        <p className="lead px-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ratione reprehenderit nesciunt amet, blanditiis in ut veniam reiciendis minima quis eum odio commodi. Ipsam quis pariatur, tempore at aperiam dolore!
                        </p>
                    </div>
                    <div className="col-12 col-lg-4 d-flex">
                        <img className="img-fluid rounded-circle align-self-center" src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid content-wrapper">
                <div className="row pb-5">
                    <div className="col-12 col-md-8 offset-md-2">
                        <Pagination
                            articlesPerPage={articlesPerPage}
                            totalArticles={articles.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                        <ArticleItem articles={currentPosts} loading={loading} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Articles;