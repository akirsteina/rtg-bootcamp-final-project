
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function ArticleItem({ articles, loading }) {

    if (!loading && articles.length === 0) {
        return <h5> Something went wrong :( </h5>;
    } else if (!loading) {
        return (articles.map((article, index) => {
            return (
                <div key={index} className="row p-2 mt-4 article-text">
                    <div className="col-12 col-md-6 col-lg-3">
                        <NavLink to={`/articles/${article._id}`}>
                            <img src={article.mainImage} className="article-img img-fluid rounded" alt="" />
                        </NavLink>
                    </div>
                    <div className="col-12 col-md-6 col-lg-9">
                        <NavLink to={`/articles/${article._id}`}><h5 className="text-center py-3 fs-2 main-header special-title article-title">{article.title}</h5></NavLink>
                        <p className="lead fw-bold text-center text-dark">{article.shortDescription}</p>
                        <p className="text-dark cut-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis in eum saepe tenetur eligendi pariatur beatae repudiandae, est asperiores, eos debitis! Illo officiis dignissimos mollitia voluptate saepe perferendis assumenda!</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="badge main-page-badge">By {article.author}</span>
                            <NavLink className="btn articles-btn fw-bold" to={`/articles/${article._id}`}>Read more</NavLink>
                        </div>
                    </div>
                </div>
            )
        }))
    } else {
        return <FontAwesomeIcon icon={faSpinner} spin />
    }
}

export default ArticleItem;