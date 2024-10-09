import { useState } from "react";
import { addTask, removeTask, updateTaskOrder } from "../services/task.servise";
import { onDragStart, onDragEnd, onDrop } from "../services/dragAndDrop.servise";

export const useTaskManager = (initialTasks) => {
  const [taskList, setTaskList] = useState(initialTasks);
  const [completeTaskList, setCompleteTaskList] = useState([]);
  const [draggedTask, setDraggedTask] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);

  const handleAddTask = (newTask) => {
    setTaskList(addTask(taskList, newTask));
  };

  const handleRemoveTask = (task) => {
    setTaskList(removeTask(taskList, task));
  };

  const handleCompleteTask = (task) => {
    setCompleteTaskList([...completeTaskList, task]);
    handleRemoveTask(task);
  };

  const handleBackToTaskList = (task) => {
    setTaskList([...taskList, task]);
    setCompleteTaskList(removeTask(completeTaskList, task));
  };

  const handleDragStart = (taskId) => onDragStart(taskId, setDraggedTask);

  const handleDragEnd = () => onDragEnd(setDraggedTask, setHoveredTask);

  const handleDrop = (targetTaskId) =>
    onDrop(
      taskList,
      draggedTask,
      targetTaskId,
      updateTaskOrder,
      setTaskList,
      setHoveredTask
    );

  return {
    taskList,
    completeTaskList,
    handleAddTask,
    handleRemoveTask,
    handleCompleteTask,
    handleBackToTaskList,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    hoveredTask,
    setHoveredTask,
  };
};
