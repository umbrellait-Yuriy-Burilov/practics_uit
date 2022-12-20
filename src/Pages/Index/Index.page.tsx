import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/_UI/Button/Button";
import { StyledIndexMenu } from "./Index.page.styled";

export const IndexPage: FC = () => {
  return (
    <StyledIndexMenu>
      <li>
        <Link to={"/films"}>
          <Button>Films</Button>
        </Link>
      </li>
      <li>
        <Link to={"/tasks"}>
          <Button>Tasks</Button>
        </Link>
      </li>
      <li>
        <Link to={"/alt-tasks"}>
          <Button>Tasks - infinity loading</Button>
        </Link>
      </li>
    </StyledIndexMenu>
  );
};
