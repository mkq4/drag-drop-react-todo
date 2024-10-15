// Функция для обновления ID у задач по порядку
const updateTaskIds = (tasks) => {
  return tasks.map((task, index) => ({ ...task, id: index + 1 }));
};

export const addTask = (newTask, setTaskList, taskList, setTask) => {
  const updatedTaskList = [...taskList, newTask];
  setTaskList(updateTaskIds(updatedTaskList)); // Перенумеровываем задачи
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

  setTaskList(updateTaskIds(updatedTaskList)); // Перенумеровываем задачи
  setCompleteTaskList(updateTaskIds(updatedCompleteTaskList));
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

  setTaskList(updateTaskIds(updatedTaskList)); // Перенумеровываем задачи
  setCompleteTaskList(updateTaskIds(updatedCompleteTaskList));
};

export const remove = (task, setTaskList, taskList) => {
  const updatedTaskList = taskList.filter((el) => el.id !== task.id);
  setTaskList(updateTaskIds(updatedTaskList)); // Перенумеровываем задачи
};
