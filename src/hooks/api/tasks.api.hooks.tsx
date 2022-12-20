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

export const usePostTask = () => useMutation(
  (task: Omit<TaskType, "id">) =>
    fetch(API_TASK_URL, {
      method: "POST",
      body: JSON.stringify(task),
    }),
  {
    onMutate: (data) => {

      const oldTasks = queryClient.getQueryData<TasksType>(["tasks"]) ?? [];

      queryClient.setQueryData<TasksType>(
        ["tasks"],
        (tasks = [] as TasksType) => [
          ...tasks,
          {
            id: Date.now(),
            ...data,
          },
        ]
      );

      // add context
      return oldTasks;
    },
    onError: (error, variables, oldTasks) => {
      // extract oldTasks from context
      queryClient.setQueryData(["tasks"], () => oldTasks);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]).then(r => r);
    },
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
      onMutate: (data) => {
        queryClient.setQueryData(["task", data.id.toString()], data);
      },
      onSettled: (res, err, data) => {
        queryClient.invalidateQueries(["task", data.id.toString()]).then(r => r);
      },
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