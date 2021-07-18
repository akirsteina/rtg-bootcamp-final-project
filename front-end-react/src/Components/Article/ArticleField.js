import Breadcrumbs from '../Breadcrumbs';
import { SRLWrapper } from "simple-react-lightbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function ArticleField({ article, loading }) {

    let articleText, articleImages;
    if (!loading && article.length === 0) {
        articleText = <h5> Something went wrong :( </h5>;
        articleImages = <h5> Something went wrong :( </h5>;
    }
    else if (!loading) {
        articleText = article.paragraphs.map((paragraph, index) => {
            if (index === 0) {
                return <p key={index} className="fs-4 fw-bolder">{paragraph}</p>
            } else {
                return <p key={index} className="lead">{paragraph}</p>
            }
        }
        )
        articleImages = article.images.map((image, index) => {
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
    }


    if (!loading && article.length === 0) {
        return <h5> Something went wrong :( </h5>;
    } else if (!loading) {
        const breadcrumbPaths = [
            { link: '/', label: 'Home' },
            { link: '/articles', label: 'Articles' },
            { label: article.title },
        ];

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
                                    <h1 className="main-header">{article.title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img src={article.mainImage} className="article-main-img img-fluid rounded" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid content-wrapper">
                    <div className="row py-5">
                        <div className="col-8 offset-2 article-text p-5">
                            {articleText}

                            <div className="fw-bold fs-4 d-flex justify-content-between pb-3">
                                <span className="review-sent fw-lighter">{(article.createdAt).substring(0, 10)}
                                </span>
                                <span>Author: <span className="badge main-page-badge">{article.author}</span></span>
                            </div>
                            <SRLWrapper>
                                <div className="row">
                                    <div className="col p-1 text-center">
                                        <img src={article.images[0]} alt="" className="img-fluid article-img rounded"></img>
                                    </div>
                                </div>
                                <div className="row">
                                    {articleImages}
                                </div>
                            </SRLWrapper>

                        </div>
                    </div>
                </div>
            </main>
        );
    } else {
        return <FontAwesomeIcon icon={faSpinner} spin />;
    }
}

export default ArticleField;