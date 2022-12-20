export type TaskType = {
  id: number;
  title: string;
  state?: boolean;
  pinned?: boolean;
};

export type TasksType = TaskType[];
