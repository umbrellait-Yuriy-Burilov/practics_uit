import { ChangeEvent, FC, FormEvent, useState } from "react";
import { TaskType} from '../../hooks/api/tasks.api.hooks';

type OnSubmitWithoutId = (data: Omit<TaskType, 'id'>) => void;
type OnSubmitWithId = (data: TaskType) => void;
export const TaskForm: FC<{
  onSubmit: OnSubmitWithId | OnSubmitWithoutId;
  isLoading?: boolean;
  submitText: string;
  initValue?: Partial<TaskType>;
}> = ({ onSubmit, isLoading = false, submitText, initValue = {} }) => {
  const [task, setTask] = useState(initValue.title ?? "");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: task
    }

    if (initValue.id) {
      (onSubmit as OnSubmitWithId)({
        id: initValue.id,
        ...data
      })
    } else {
      (onSubmit as OnSubmitWithoutId)(data);
    }

    setTask("");
  };

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <input type="text" value={task} onChange={onChange} />
      <button type={"submit"} disabled={isLoading}>
        {submitText}
      </button>
    </form>
  );
};
