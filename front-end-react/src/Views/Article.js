import '../Assets/Css/articles.css';
import { SRLWrapper } from "simple-react-lightbox";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '../Components/Breadcrumbs';


function Article() {

    const { articleID } = useParams();
    const [article, setArticle] = useState({
        loading: true,
        items: [],
    });

    const loadArticle = async () => {
        setArticle({
            loading: true,
            items: [],
        });
        try {
            const url = `http://localhost:8072/articles/${articleID}`;
            const response = await axios.get(url);
            setArticle({
                loading: false,
                items: response.data,
            });

        } catch (e) {
            alert('Whoops, something went wrong!');
            setArticle({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadArticle();
    }, []);

    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { link: '/articles', label: 'Articles' },
        { label: '' },
    ];

    let articleText = <FontAwesomeIcon icon={faSpinner} spin />;
    let articleImages = <FontAwesomeIcon icon={faSpinner} spin />;
    let articleTitle = <FontAwesomeIcon icon={faSpinner} spin />;
    let mainImage = <FontAwesomeIcon icon={faSpinner} spin />;
    let firstImage = <FontAwesomeIcon icon={faSpinner} spin />;
    if (!article.loading && article.items.length === 0) {
        articleText = <h5> Something went wrong </h5>;
        articleImages = <h5> Something went wrong </h5>;
        articleTitle = <h5> Something went wrong </h5>;
        mainImage = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
        firstImage = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
    } else if (!article.loading) {
        articleText = article.items.paragraphs.map((paragraph, index) => {
            if (index === 0) {
                return (
                    <p key={index} className="fs-4 fw-bolder">{paragraph}</p>
                )
            } else {
                return <p key={index} className="lead">{paragraph}</p>
            }
        });
        articleImages = article.items.images.map((image, index) => {
            if (index > 0) {
                return (
                    <div key={index} className="col-12 col-sm-6 col-lg-3 p-1">
                        <img alt="" src={image} className="img-fluid rounded article-img" />
                    </div>
                )
            } else {
                return <div key={index}></div>
            }
        });
        articleTitle = article.items.title;
        mainImage = article.items.mainImage;
        firstImage = article.items.images[0];

    }

    return (
        <main>
            <div className="container">
                <div className="row pt-5 mt-5">
                    <div className="col-12 breadcrumbs">
                        <Breadcrumbs paths={breadcrumbPaths} />
                    </div>
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <div className="row pt-5 mt-5 pb-2">
                            <div className="col-12 text-center">
                                <h1 className="main-header">{articleTitle}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src={mainImage} className="article-main-img img-fluid rounded" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid content-wrapper">
                <div className="row py-5">
                    <div className="col-8 offset-2 article-text p-5">
                        {articleText}
                        <SRLWrapper>
                            <div className="row">
                                <div className="col p-1">
                                    <img src={firstImage} alt="" className="img-fluid article-img rounded"></img>
                                </div>
                            </div>
                            <div className="row">
                                {articleImages}
                            </div>
                        </SRLWrapper>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Article;