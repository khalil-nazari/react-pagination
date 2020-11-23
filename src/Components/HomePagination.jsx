import React from 'react'


const HomePagination = ({postsPerPage, totalPages, paginate, nextPage, prevPage}) => {
    const pageNumber = [];
    for(let i=1; i <= Math.ceil(totalPages/postsPerPage); i++){
        pageNumber.push(i)
    }

    

    return (
        <nav className="paginate">
            <ul className="pagination">
                <li><a onClick={()=>prevPage()}>Prev</a></li>
                {pageNumber.map(number => (
                    <li key={number}><a onClick={()=>paginate(number)}>{number}</a></li>
                ))}
                <li><a onClick={()=>nextPage()}>Next</a></li>
            </ul>
        </nav>
    )
}

export default HomePagination
