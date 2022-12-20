import {TaskType} from '../../models/task.type';
import {InfiniteData} from 'react-query';
import {TasksResponseType} from '../../hooks/api/tasks.api.hooks';

export type AltTasksListTypes = {
  onTaskUpdate: (task: TaskType) => void;
  taskPages: InfiniteData<TasksResponseType> | undefined;
  onInView: () => void;
}