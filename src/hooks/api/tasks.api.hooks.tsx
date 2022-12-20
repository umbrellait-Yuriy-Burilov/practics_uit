import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import { queryClient } from "../../config/QueryProvider";
import "./mocks/Tasks.mock";
import { MOCK_API_TASK_URL, sortByPined } from "./mocks/Tasks.mock";
import { TaskType } from "../../models/task.type";
import { useParams } from "react-router-dom";

export const API_TASK_URL = MOCK_API_TASK_URL;

export type TasksResponseType = {
  tasks: TaskType[];
  count: number;
};

export const getTasks = ({ queryKey }: QueryFunctionContext) => {
  const [, pageId] = queryKey;
  return fetch(`${API_TASK_URL}?page=${pageId}`).then(
    (res) => res.json() as Promise<TasksResponseType>
  );
};

export const getAltTasks = ({ pageParam = 1 }: QueryFunctionContext) => {
  return fetch(`${API_TASK_URL}?page=${pageParam}`).then(
    (res) => res.json() as Promise<TasksResponseType>
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

  return useQuery(["tasks", page], getTasks, {
    keepPreviousData: true, // останавливаем рендер до загрузки данных
    onSuccess: (data) => {
      const { tasks } = data;

      tasks.forEach((task) => {
        queryClient.setQueryData(["task", task.id.toString()], task);
      });

      queryClient
        .prefetchQuery(["tasks", (pageNum + 1).toString()], getTasks)
        .then();

      pageNum > 0 &&
        queryClient
          .prefetchQuery(["tasks", (pageNum - 1).toString()], getTasks)
          .then();
    },
  });
};

export const useGetAltTasks = () =>
  useInfiniteQuery(["tasks"], getAltTasks, {
    getNextPageParam: (lastPage, pages) => {
      const { count } = lastPage;
      const nextPages = Math.ceil(count / (pages.length * 10)) - 1;

      if (nextPages) {
        return pages.length + 1;
      }

      return null;
    },
    // keepPreviousData: true, // останавливаем рендер до загрузки данных
  });

export const usePostTask = () => {
  const { page: queryPage = "1" } = useParams();

  return useMutation(postTask, {
    onMutate: (data) => {
      queryClient.cancelQueries(["tasks"]).then();

      const oldTasks =
        queryClient.getQueryData<TasksResponseType>(["tasks", queryPage]) ?? [];

      queryClient.setQueryData<TasksResponseType>(
        ["tasks", queryPage],
        (tasksData) => {
          const count = tasksData?.count || 0;

          const isLastPage = Math.ceil(count / 10).toString() === queryPage;

          if (isLastPage && count % 10 > 0) {
            return buildNewTasks(data, tasksData);
          }

          return tasksData as TasksResponseType;
        }
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
};

export const usePutTask = () => {
  const { page: queryPage = "1" } = useParams();

  return useMutation(putTask, {
    onMutate: (data) => {
      queryClient.cancelQueries(["tasks"]).then();

      const oldTasks =
        queryClient.getQueryData<TasksResponseType>(["tasks", queryPage]) ?? [];

      queryClient.setQueryData<TasksResponseType>(
        ["tasks", queryPage],
        (tasksData) => {
          const tasks = tasksData?.tasks || [];

          return {
            tasks: [
              ...tasks
                .map((task) => (task.id === data.id ? data : task))
                .sort(sortByPined),
            ],
            count: tasksData?.count || 0,
          };
        }
      );

      queryClient.setQueryData(["task", data.id.toString()], data);
      queryClient.invalidateQueries(["task", data.id.toString()]);

      return oldTasks;
    },
    onSettled: (res, err, data) => {
      // queryClient.invalidateQueries(["task", data.id.toString()]).then();
      queryClient.invalidateQueries("tasks").then();
    },
  });
};

function buildNewTasks(
  data: Omit<TaskType, "id">,
  tasksData: TasksResponseType | undefined
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
