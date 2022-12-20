import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { FilmsPage } from "../Pages/Films/Films.page";
import {NotFoundPage} from '../Pages/NotFoundPage/NotFound.page';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<FilmsPage />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};