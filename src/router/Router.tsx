import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Films } from "../Components/Films/Films";
import {NotFoundPage} from '../Pages/NotFoundPage/NotFound.page';
import { FilmPageWrapper } from "../tmp/FilmPageWrapper";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Films />} />
      <Route path={'/film/:filmId'} element={<FilmPageWrapper />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};