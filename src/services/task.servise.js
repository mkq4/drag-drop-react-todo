export const addTask = (newTask, setTaskList, taskList, setTask) => {
  const updatedTaskList = [...taskList, newTask];
  setTaskList(updatedTaskList);
  setTask("");
};

export const completeTask = (
  completedTask,
  setCompleteTaskList,
  completeTaskList,
  setTaskList,
  taskList
) => {
  const updatedTaskList = taskList.filter((el) => el.id !== completedTask.id);
  const updatedCompleteTaskList = [...completeTaskList, completedTask];

  setTaskList(updatedTaskList);
  setCompleteTaskList(updatedCompleteTaskList);
};

export const backToComplete = (
  task,
  setTaskList,
  taskList,
  setCompleteTaskList,
  completeTaskList
) => {
  const updatedCompleteTaskList = completeTaskList.filter(
    (el) => el.id !== task.id
  );
  const updatedTaskList = [...taskList, task];

  setTaskList(updatedTaskList); 
  setCompleteTaskList(updatedCompleteTaskList);
};

export const remove = (task, setTaskList, taskList) => {
  const updatedTaskList = taskList.filter((el) => el.id !== task.id);
  setTaskList(updatedTaskList); 
};
