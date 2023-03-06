import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / 5); i++) {
    pageNumbers.push(i);
  }

   const handlePageClick = (pageNumber) => {
    // window.alert(pageNumber)
      onPageChange(pageNumber);
  };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        >
          <a
            href={"#"}
            onClick={() => handlePageClick(currentPage - 1)}
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers?.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`pagination-item ${
                currentPage === currentPage ? "active" : ""
            }`}
          >
            <a
              href="#"
              onClick={() => handlePageClick(pageNumber)}
            >
              {currentPage}
            </a>
          </li>
        ))}
        <li
          className={`pagination-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            href="#"
            onClick={() => handlePageClick(currentPage + 1)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
