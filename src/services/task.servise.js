export const addTask = (newTask, setTaskList, taskList, setTask) => {
  setTaskList([...taskList, newTask]);
  setTask("");
};

export const completeTask = (completedTask, setCompleteTaskList, completeTaskList, setTaskList, taskList) => {
  setCompleteTaskList([...completeTaskList, completedTask]);
  setTaskList(taskList.filter((el) => el.id !== completedTask.id));
};

export const backToComplete = (task, setTaskList, taskList, setCompleteTaskList, completeTaskList) => {
  setTaskList([...taskList, task]);
  setCompleteTaskList(completeTaskList.filter((el) => el.id !== task.id));
};

export const remove = (task, setTaskList, taskList) => {
  setTaskList(taskList.filter((el) => el.id !== task.id));
};
