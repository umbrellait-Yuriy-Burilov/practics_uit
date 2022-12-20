import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Button from "../_UI/Button/Button";
import styled from "styled-components";

const StyledPagination = styled.p`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  gap: 0 8px;
`;
export const Pagination: FC<{
  path: string;
  currentPage: number;
  pageCount: number;
}> = memo(({ path, currentPage, pageCount }) => {
  return (
    <StyledPagination>
      {currentPage >= 2 ? (
        <Link to={`${path}/${1}`}>
          <Button>первая</Button>
        </Link>
      ) : (
        <Button disabled>первая</Button>
      )}

      {currentPage <= 1 ? (
        <Button disabled={true}>предыдущая</Button>
      ) : (
        <Link to={currentPage === 2 ? `${path}` : `${path}/${currentPage - 1}`}>
          <Button>предыдущая</Button>
        </Link>
      )}

      {` ${currentPage} `}

      {currentPage >= pageCount ? (
        <Button disabled={true}>следующая</Button>
      ) : (
        <Link to={`${path}/${Number(currentPage) + 1}`}>
          <Button>следующая</Button>
        </Link>
      )}

      {currentPage <= pageCount - 1 ? (
        <Link to={`${path}/${pageCount}`}>
          <Button>последняя</Button>
        </Link>
      ) : (
        <Button disabled>последняя</Button>
      )}
    </StyledPagination>
  );
});
