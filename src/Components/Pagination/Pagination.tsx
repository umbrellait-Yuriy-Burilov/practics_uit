import { FC, memo } from "react";
import Button from "../_UI/Button/Button";
import { PaginationPropsType } from "./Pagination.types";
import { StyledPagination } from "./Pagination.styled";

export const Pagination: FC<PaginationPropsType> = memo(
  ({ onChange, currentPage, pageCount }) => {

    return (
      <StyledPagination>
        <Button
          onClick={() =>onChange(1)}
          disabled={currentPage === 1}
        >первая</Button>

        <Button
          onClick={() =>onChange(currentPage - 1)}
          disabled={currentPage === 1}
        >предыдущая</Button>

        {` ${currentPage} `}

        <Button
          onClick={() =>onChange(currentPage + 1)}
          disabled={currentPage >= pageCount}
        >следующая</Button>

        <Button
          onClick={() =>onChange(pageCount)}
          disabled={currentPage >= pageCount}
        >последняя</Button>
      </StyledPagination>
    );
  }
);
