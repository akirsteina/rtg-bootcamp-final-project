function ArticleItem({articles}) {

    if (!articles.loading && articles.items.length === 0) {
        return <h5> Something went wrong </h5>;   
    } else if (!articles.loading) {
        return (articles.items.map((article, index) => {
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
        }))
    } else {
        return <FontAwesomeIcon icon={faSpinner} spin/>
    }
}

export default ArticleItem;