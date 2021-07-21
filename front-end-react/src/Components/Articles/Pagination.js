function Pagination({ articlesPerPage, totalArticles, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    }

    const previous = currentPage - 1;
    const next = currentPage + 1;

    let previousBtn, nextBtn;
    if (previous >= 1) {
        previousBtn = (
            <li className="page-item">
                <a onClick={(event) => { event.preventDefault(); paginate(previous) }} href="!#" className="page-link">
                    Previous
                </a>
            </li>
        )
    } else {
        previousBtn = (
            <li className="page-item">
                <button className="page-link disabled-btn" disabled>
                    Previous
                </button>
            </li>
        )
    }

    if (next <= pageNumbers.length) {
        nextBtn = (
            <li className="page-item">
                <a onClick={(event) => { event.preventDefault(); paginate(next) }} href="!#" className="page-link">
                    Next
                </a>
            </li>
        )
    } else {
        nextBtn = (
            <li className="page-item">
                <button className="page-link disabled-btn" disabled>
                    Next
                </button>
            </li>
        )
    }

    const pageBtns = pageNumbers.map((number, index) => {
        if (number === currentPage) {
            return (<li key={index} className="page-item">
                <a onClick={(event) => { event.preventDefault(); paginate(number) }} href="!#" className="page-link active-page">
                    {number}
                </a>
            </li>)
        } else {
            return (
                <li key={index} className="page-item">
                    <a onClick={(event) => { event.preventDefault(); paginate(number) }} href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            )
        }

    })

    return (
        <nav>
            <ul className="pagination pt-5">
                {previousBtn}
                {pageBtns}
                {nextBtn}
            </ul>
        </nav>
    )
}

export default Pagination;