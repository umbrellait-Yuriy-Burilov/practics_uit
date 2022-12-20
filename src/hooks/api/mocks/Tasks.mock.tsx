import fetchMock from "fetch-mock";
import { TasksType, TaskType } from "../tasks.api.hooks";

const API_TASK_URL = "/api/tasks";

export const MOCK_API_TASK_URL = API_TASK_URL;

const tasks = [...Array(200)].map((item, idx) => ({
  id: idx,
  title: `Task ${idx + 1}`,
}));

const tasksMock: TasksType = {
  tasks,
  count: tasks.length,
};

const wrongWords = ["bad", "anti-test"];

fetchMock.get(`begin:${API_TASK_URL}?`, async (url) => {
  const page = Number((url.split("?").pop() as string).replace("page=", ""));
  await new Promise((res) => setTimeout(res, 1000));
  return {
    tasks: tasksMock.tasks.slice((page - 1) * 10, page * 10),
    count: tasksMock.count,
  };
});

fetchMock.get(`express:${API_TASK_URL}/:id`, async (url: string) => {
  const id = url.split("/").pop();
  await new Promise((res) => setTimeout(res, 1000));
  return tasksMock.tasks.find((task) => task.id.toString() === id);
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
    id: Date.now(),
    ...data,
  };

  tasksMock.tasks.push(newData);
  tasksMock.count++;

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

  const currentTaskId = tasksMock.tasks.findIndex(
    (task) => task.id === data.id
  );

  return (tasksMock.tasks[currentTaskId] = data);
});
