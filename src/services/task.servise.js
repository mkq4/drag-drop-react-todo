export const addTask = (taskList, newTask) => {
  return [...taskList, newTask];
};

export const removeTask = (taskList, task) => {
  return taskList.filter((el) => el.id !== task.id);
};

export const updateTaskOrder = (taskList, draggedTask, targetTask) => {
  const newTaskList = taskList.map((task) => {
    if (task.id === targetTask.id) {
      return { ...task, order: draggedTask.order };
    }
    if (task.id === draggedTask.id) {
      return { ...task, order: targetTask.order };
    }
    return task;
  });

  return newTaskList.sort((a, b) => a.order - b.order);
};
