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
        <p>Практика с react-query на реальном api (swapi) - prefetch</p>
      </li>
      <li>
        <Link to={"/tasks"}>
          <Button>Tasks</Button>
        </Link>
        <p>
          Практика с react-query (mock) - prefetch, pagination, cache control
        </p>
      </li>
      <li>
        <Link to={"/alt-tasks"}>
          <Button>Tasks - infinity loading</Button>
        </Link>
        <p>Практика с react-query (mock) - infinity scroll</p>
        <p>
          Данный подход лучше всего подходит для отображения неизменяемых
          списков
        </p>

        <p>
          в данном случе был использован плохой подход в целях обучения, для
          лучшей реализации, необходимо использовать кастомный компонент, на
          основе пагинации, который будет обновлять только видимые страницы
        </p>
      </li>
    </StyledIndexMenu>
  );
};
