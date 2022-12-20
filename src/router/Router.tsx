import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Films } from "../Components/Films/Films";
import { NotFoundPage } from "../Pages/NotFoundPage/NotFound.page";
import { FilmPageWrapper } from "../tmp/FilmPageWrapper";
import { IndexPage } from "../Pages/Index/Index.page";
import { TasksPage } from "../Pages/Tasks/Tasks.page";
import { TaskPage } from "../Pages/Tasks/Task.page";
import { AltTasksPage } from "../Pages/Tasks/AltTasks.page";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={""} element={<IndexPage />} />

      <Route path={"films"}>
        <Route path={""} element={<Films />} />
        <Route path={":filmId"} element={<FilmPageWrapper />} />
      </Route>

      <Route path={"tasks"}>
        <Route path={""} element={<TasksPage />} />
        <Route path={":page"} element={<TasksPage />} />
      </Route>

      <Route path={"alt-tasks"}>
        <Route path={""} element={<AltTasksPage />} />
      </Route>

      <Route path={"task"}>
        <Route path={""} element={<NotFoundPage />} />
        <Route path={":taskId"} element={<TaskPage />} />
      </Route>

      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};
