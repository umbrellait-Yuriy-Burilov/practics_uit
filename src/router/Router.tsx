import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Films } from "../Components/Films/Films";
import { NotFoundPage } from "../Pages/NotFoundPage/NotFound.page";
import { FilmPageWrapper } from "../tmp/FilmPageWrapper";
import { IndexPage } from "../Pages/Index/Index.page";
import { TasksPage } from "../Pages/Tasks/Tasks.page";
import { TaskPage } from "../Pages/Tasks/Task.page";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<IndexPage />} />

      <Route path={"/films"} element={<Films />} />
      <Route path={"/films/:filmId"} element={<FilmPageWrapper />} />

      <Route path={"/tasks"} element={<TasksPage />} />
      <Route path={"/tasks/:taskId"} element={<TaskPage />} />

      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};