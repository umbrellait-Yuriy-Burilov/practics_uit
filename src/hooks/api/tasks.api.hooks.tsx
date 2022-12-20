import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../config/QueryProvider";
import "./mocks/Tasks.mock";
import { MOCK_API_TASK_URL } from "./mocks/Tasks.mock";

export const API_TASK_URL = MOCK_API_TASK_URL;

export type TaskType = {
  id: number;
  title: string;
};

export type TasksType = {
  tasks: TaskType[];
  count: number;
};

const getTasks = (page: string) =>
  fetch(`${API_TASK_URL}?page=${page}`).then(
    (res) => res.json() as Promise<TasksType>
  );

const getTask = async (id: string) =>
  await fetch(`${API_TASK_URL}/${id}`).then(
    (res) => res.json() as Promise<TaskType>
  );

const putTask = (task: TaskType) =>
  fetch(API_TASK_URL, {
    method: "PUT",
    body: JSON.stringify(task),
  });

const postTask = (task: Omit<TaskType, "id">) =>
  fetch(API_TASK_URL, {
    method: "POST",
    body: JSON.stringify(task),
  });

export const usePostTask = () =>
  useMutation(postTask, {
    onMutate: (data) => {
      const oldTasks = queryClient.getQueryData<TasksType>(["tasks"]) ?? [];

      queryClient.setQueryData<TasksType>(["tasks"], (tasksData) => {
        if (tasksData === undefined) {
          tasksData = {
            tasks: [],
            count: 0,
          };
        }

        const { tasks, count } = tasksData;
        return {
          tasks: [
            ...tasks,
            {
              id: Date.now(),
              ...data,
            },
          ],
          count: count + 1,
        };
      });

      // add context
      return oldTasks;
    },
    onError: (error, variables, oldTasks) => {
      // extract oldTasks from context
      queryClient.setQueryData(["tasks"], () => oldTasks);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]).then((r) => r);
    },
  });

export const usePutTask = () =>
  useMutation(putTask, {
    onMutate: (data) => {
      queryClient.setQueryData(["task", data.id.toString()], data);
    },
    onSettled: (res, err, data) => {
      queryClient
        .invalidateQueries(["task", data.id.toString()])
        .then((r) => r);
    },
  });

export const useGetTask = (id: string) =>
  useQuery(["task", id], () => getTask(id), {});

export const useGetTasks = (page: string) =>
  useQuery(["tasks", page], () => getTasks(page), {});
