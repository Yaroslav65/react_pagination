import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  currentPage: number;
  total: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  total,
  itemsPerPage,
  onPageChange,
  setCurrentPage,
}) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    pages.push(i);
  }

  const onNextPage = () => {
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ul className="pagination">
      <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1 ? true : false}
          onClick={() => onPrevPage()}
        >
          «
        </a>
      </li>
      {pages.map(page => (
        <li
          key={page}
          className={currentPage === page ? 'page-item active' : 'page-item'}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={'#' + page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
      <li
        className={
          currentPage === pages.length ? 'page-item disabled' : 'page-item'
        }
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === pages.length ? true : false}
          onClick={() => onNextPage()}
        >
          »
        </a>
      </li>
    </ul>
  );
};
