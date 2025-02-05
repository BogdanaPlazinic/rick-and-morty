import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginaton = ( {info, pageNumber, setPageNumber} ) => {
    if(!info) return '';
    return (
        <ReactPaginate 
        className=""
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        pageCount={info.pages}
        nextClassName=""
        previousClassName=""
        pageClassName=""
        pageLinkClassName=""
        activeClassName=""
        onPageChange={(data) => {
            setPageNumber(data.selected + 1); 
        }}
        />
    )
};

export default Paginaton;







/* let next = () => {
    setPageNumber((pageValue) => pageValue + 1)
};

let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((pageValue) => pageValue - 1)
}; */