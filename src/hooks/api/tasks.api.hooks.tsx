import { QueryFunctionContext, useMutation, useQuery } from "react-query";
import { queryClient } from "../../config/QueryProvider";
import "./mocks/Tasks.mock";
import { MOCK_API_TASK_URL } from "./mocks/Tasks.mock";
import { useEffect } from "react";

export const API_TASK_URL = MOCK_API_TASK_URL;

export type TaskType = {
  id: number;
  title: string;
};

export type TasksType = {
  tasks: TaskType[];
  count: number;
};

export const getTasks = ({ queryKey }: QueryFunctionContext) => {
  const [, pageId] = queryKey;
  return fetch(`${API_TASK_URL}?page=${pageId}`).then(
    (res) => res.json() as Promise<TasksType>
  );
};

const getTask = ({ queryKey }: QueryFunctionContext) => {
  const [, taskId] = queryKey;
  return fetch(`${API_TASK_URL}/${taskId}`).then(
    (res) => res.json() as Promise<TaskType>
  );
};

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

export const useGetTask = (id: string) => useQuery(["task", id], getTask, {});

export const useGetTasks = (page: string) => {
  const pageNum = Number(page);

  useEffect(() => {
    queryClient
      .prefetchQuery(["tasks", (pageNum + 1).toString()], getTasks)
      .then();
    pageNum > 0 &&
      queryClient
        .prefetchQuery(["tasks", (pageNum - 1).toString()], getTasks)
        .then();
  }, [pageNum]);

  return useQuery(["tasks", page], getTasks, {
    keepPreviousData: true, // останавливаем рендер до загрузки данных
  });
};

export const usePostTask = () =>
  useMutation(postTask, {
    onMutate: (data) => {
      // todo после добавления page key не работает позитивное добавление
      const oldTasks = queryClient.getQueryData<TasksType>(["tasks"]) ?? [];

      queryClient.setQueryData<TasksType>(["tasks"], (tasksData) =>
        buildNewTasks(data, tasksData)
      );

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

function buildNewTasks(
  data: Omit<TaskType, "id">,
  tasksData: TasksType | undefined
) {
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
}
