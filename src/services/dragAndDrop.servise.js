export const onDragStart = (taskId, setDraggedTask) => {
  setDraggedTask(taskId);
};

export const onDragEnd = (setDraggedTask, setHoveredTask) => {
  setDraggedTask(null);
  setHoveredTask(null);
};

export const onDrop = (
  taskList,
  draggedTask,
  targetTaskId,
  updateTaskOrder,
  setTaskList,
  setHoveredTask
) => {
  const draggedItem = taskList.find((task) => task.id === draggedTask);
  const targetItem = taskList.find((task) => task.id === targetTaskId);

  if (!draggedItem || !targetItem || draggedItem.order === targetItem.order) {
    setHoveredTask(null);
    return;
  }

  const newTaskList = updateTaskOrder(taskList, draggedItem, targetItem);
  setTaskList(newTaskList);
  setHoveredTask(null);
};
