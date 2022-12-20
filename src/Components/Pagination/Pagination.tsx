import { FC, memo } from "react";
import { Link } from "react-router-dom";

export const Pagination: FC<{
  path: string;
  currentPage: number;
  pageCount: number;
}> = memo(({ path, currentPage, pageCount }) => {
  return (
    <p>
      {currentPage <= 1 ? (
        <button disabled={true}>предыдущая</button>
      ) : (
        <Link to={currentPage === 2 ? `${path}` : `${path}/${currentPage - 1}`}>
          <button>предыдущая</button>
        </Link>
      )}

      {` ${currentPage} `}

      {currentPage >= pageCount ? (
        <button disabled={true}>следующая</button>
      ) : (
        <Link to={`${path}/${Number(currentPage) + 1}`}>
          <button>следующая</button>
        </Link>
      )}
    </p>
  );
});