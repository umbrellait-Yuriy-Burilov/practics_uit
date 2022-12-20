import { FC } from "react";
import { Link } from "react-router-dom";

export const IndexPage: FC = () => {
  return (
    <ul>
      <li>
        <Link to={"/films"}>Films</Link>
      </li>
      <li>
        <Link to={"/tasks"}>Tasks</Link>
      </li>
      <li>
        <Link to={"/alt-tasks"}>Tasks - infinity loading</Link>
      </li>
    </ul>
  );
};
