import { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "../_UI/Button/Button";
import { StyledTaskForm } from "./Task.form.styled";
import {
  OnSubmitWithId,
  OnSubmitWithoutId,
  TaskFormProps,
} from "./Task.form.types";

export const TaskForm: FC<TaskFormProps> = ({
  onSubmit,
  isLoading = false,
  submitText,
  initValue = {},
}) => {
  const [task, setTask] = useState(initValue.title ?? "");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: task,
    };

    if (initValue.id) {
      (onSubmit as OnSubmitWithId)({
        id: initValue.id,
        ...data,
      });
    } else {
      (onSubmit as OnSubmitWithoutId)(data);
    }

    setTask("");
  };

  return (
    <StyledTaskForm onSubmit={(e) => onFormSubmit(e)}>
      <input
        type="text"
        value={task}
        onChange={onChange}
        placeholder={"new task title"}
      />
      <Button type={"submit"} disabled={isLoading}>
        {submitText}
      </Button>
    </StyledTaskForm>
  );
};
