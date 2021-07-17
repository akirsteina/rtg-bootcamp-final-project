function Pagination({ articlesPerPage, totalArticles, paginate, paginatePrevious }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className="pagination justify-content-end">
                {pageNumbers.map((number, index) => {

                    return (
                        <li key={index} className="page-item">
                            <a onClick={(event) => { event.preventDefault(); paginate(number) }} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;