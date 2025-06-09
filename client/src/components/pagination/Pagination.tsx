import { Car } from '../../graphql/generated';
import { useNavigate, useParams } from 'react-router';
import { getPages } from '../../utils/getPages';
import './pagination.scss';
import ArrowLeftIcon from '@assets/icons/arrow-left-icon.svg?react';
import DoubleArrowLeftIcon from '@assets/icons/double-arrow-left-icon.svg?react';
import ArrowRightIcon from '@assets/icons/arrow-right-icon.svg?react';
import DoubleArrowRightIcon from '@assets/icons/double-arrow-right-icon.svg?react';

interface PaginationProps {
  totalPages: number
}

const Pagination = ({totalPages}: PaginationProps) => {
  const params = useParams<{ pageId: string }>()
  const navigate = useNavigate();

  if (params.pageId && isNaN(+params.pageId)) throw new Error('pageId must be a number')

  return (
    <div className="pagination">
      <div className="pagination__left">
        <button className="pagination__start pagination__start--double-left">
          <DoubleArrowLeftIcon className="pagination__icon pagination__icon--double-left" />
        </button>
        <button className="pagination__prev">
          <ArrowLeftIcon className="pagination__icon pagination__icon--left" />
        </button>
      </div>
      <div className="pagination__pages">
        {getPages(+params.pageId!, totalPages).map((page, index) =>
          page === "..." ? (
            <span key={index} className="pagination-dots">
            ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => navigate(`/cars/${page}`)}
              className={`pagination__page  ${+params.pageId! === page ? "pagination__page--active" : ""}`}
            >
              {page}
            </button>
          )
        )}
      </div>
      <div className="pagination__right">
        <button className="pagination__next">
          <ArrowRightIcon className="pagination__icon pagination__icon--right" />
        </button>
        <button className="pagination__end pagination__end--double-right">
          <DoubleArrowRightIcon className="pagination__icon pagination__icon--double-right" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;