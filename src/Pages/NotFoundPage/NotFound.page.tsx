import { FC } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: FC = () => (
  <div>
    <h3>Страница не найдена </h3>
    <p>Ошибка 404</p>
    <p><Link to={'/'}>вернуться на главную</Link></p>
  </div>
);
