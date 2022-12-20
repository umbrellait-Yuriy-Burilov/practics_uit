import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../config/QueryProvider";
import "./mocks/Tasks.mock";
import { MOCK_API_TASK_URL } from "./mocks/Tasks.mock";

export const API_TASK_URL = MOCK_API_TASK_URL;

export type TaskType = {
  id: number;
  title: string;
};

export type TasksType = TaskType[];

export const usePostTask = () =>
  useMutation(
    (task: Omit<TaskType, "id">) =>
      fetch(API_TASK_URL, {
        method: "POST",
        body: JSON.stringify(task),
      }),
    {
      onSuccess: () => {
        queryClient?.invalidateQueries(["tasks"]);
      }
    }
  );

export const usePutTask = () =>
  useMutation(
    (task: TaskType) =>
      fetch(API_TASK_URL, {
        method: "PUT",
        body: JSON.stringify(task),
      }),
    {
      onSuccess: (_, data) => {
        queryClient?.invalidateQueries(["task", data.id.toString()]);
      }
    }
  );

export const useGetTask = (id: string) =>
  useQuery(
    ["task", id],
    () =>
      fetch(`${API_TASK_URL}/${id}`).then(
        (res) => res.json() as Promise<TaskType>
      ),
    {}
  );
export const useGetTasks = () =>
  useQuery(
    ["tasks"],
    () => fetch(API_TASK_URL).then((res) => res.json() as Promise<TasksType>),
    {}
  );