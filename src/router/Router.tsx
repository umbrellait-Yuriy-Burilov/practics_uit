import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Films } from "../Components/Films/Films";
import {NotFoundPage} from '../Pages/NotFoundPage/NotFound.page';
import {FilmPage} from '../Pages/Films/Film.page';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Films />} />
      <Route path={'/film/:filmId'} element={<FilmPage />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};