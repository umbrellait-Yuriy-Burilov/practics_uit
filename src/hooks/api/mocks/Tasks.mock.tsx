import fetchMock from "fetch-mock";
import { TasksType, TaskType } from "../tasks.api.hooks";

const API_TASK_URL = "/api/tasks";

export const MOCK_API_TASK_URL = API_TASK_URL;

let countId = 3;

const tasksMock: TasksType = [
  {
    id: 0,
    title: "task 1",
  },
  {
    id: 1,
    title: "task 2",
  },
  {
    id: 2,
    title: "task 3",
  },
];

const wrongWords = ["bad", "anti-test"];

fetchMock.get(API_TASK_URL, async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return tasksMock;
});

fetchMock.get(`express:${API_TASK_URL}/:id`, async (url: string) => {
  const id = url.split("/").pop();
  await new Promise((res) => setTimeout(res, 1000));
  return tasksMock.find((task) => task.id.toString() === id);
});

fetchMock.post(API_TASK_URL, async (_, res) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = JSON.parse(res.body as string) as Omit<TaskType, "id">;

  if (wrongWords.includes(data.title)) {
    return {
      throws: new TypeError("Bad Words"),
    };
  }

  const newData = {
    id: countId++,
    ...data,
  };

  tasksMock.push(newData);

  return newData;
});

fetchMock.put(API_TASK_URL, async (_, res) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = JSON.parse(res.body as string) as TaskType;

  if (wrongWords.includes(data.title)) {
    return {
      throws: new TypeError("Bad Words"),
    };
  }

  const currentTaskId = tasksMock.findIndex((task) => task.id === data.id);

  return (tasksMock[currentTaskId] = data);
});