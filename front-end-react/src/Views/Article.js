import '../Assets/Css/articles.css';

function Article() {

    const article = {
        title: 'Best potting mixes for your succulents: is perlite really that good?',
        id: 'potting-mixes',
        mainImage: "https://images.unsplash.com/photo-1509223197845-458d87318791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=859&q=80",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        paragraphs: [
            "Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsa itaque dicta, facere sunt sint fuga nostrum in distinctio quis et, deleniti nam enim quos!",
            "Quas voluptatem modi ab exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. ",
            "Molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsa itaque dicta, facere sunt sint fuga nostrum in distinctio quis et, deleniti nam enim quos! Quas voluptatem modi ab exercitationem. ",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim doloremque culpa animi veritatis, veniam atque quod ipsum qui, minus sit nisi magnam, sed aut tempore distinctio vitae rem. Molestias!",
        ]
    }

    const articleText = article.paragraphs.map((paragraph, index) => {
        if (index === 0) {
            return (
                <p key={index} className="fs-4 fw-bolder">{paragraph}</p>
            )
        } else { 
            return <p key={index} className="lead">{paragraph}</p>
        }

    });

    return (

        <main>
            <div className="container">
                <div className="row pt-5 mt-5">
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
                    <div className="col-8 offset-2 article-text">
                        {articleText}
                    </div>
                </div>
            </div>

        </main >
    )
}

export default Article;