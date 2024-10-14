export const addTask = (newTask, setTaskList, taskList, setTask) => {
  setTaskList([...taskList, newTask]);
  setTask("");
};

export const completeTask = (
  completedTask,
  setCompleteTaskList,
  completeTaskList,
  setTaskList,
  taskList
) => {
  setCompleteTaskList([...completeTaskList, completedTask]);
  setTaskList(taskList.filter((el) => el.id !== completedTask.id));
};

export const backToComplete = (
  task,
  setTaskList,
  taskList,
  setCompleteTaskList,
  completeTaskList
) => {
  console.log("task", task);
  console.log("taskList before", taskList);
  console.log("completeTaskList before", completeTaskList);

  setTaskList([...taskList, task]);
  setCompleteTaskList(completeTaskList.filter((el) => el.id !== task.id));

  console.log("taskList after", taskList);
  console.log("completeTaskList after", completeTaskList);
};

export const remove = (task, setTaskList, taskList) => {
  setTaskList(taskList.filter((el) => el.id !== task.id));
};
