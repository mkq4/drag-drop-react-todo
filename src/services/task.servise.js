import { arrayMove } from "@dnd-kit/sortable";

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

export const handleDragEnd = (
  event,
  taskList,
  setTaskList,
  completeTaskList,
  setCompleteTaskList
) => {
  const { active, over } = event;

  if (!over) return;

  const getTaskPos = (id, list) => list.findIndex((task) => task.id === id);

  const isActiveTaskInCurrent =
    taskList.find((task) => task.id === active.id) !== undefined;
  const isOverInCurrent =
    taskList.find((task) => task.id === over.id) !== undefined;

  if (isActiveTaskInCurrent && isOverInCurrent) {
    // Перетаскивание внутри CurrentTasks
    setTaskList((items) => {
      const oldIndex = getTaskPos(active.id, taskList);
      const newIndex = getTaskPos(over.id, taskList);
      return arrayMove(items, oldIndex, newIndex);
    });
  } else if (!isActiveTaskInCurrent && !isOverInCurrent) {
    // Перетаскивание внутри CompletedTasks
    setCompleteTaskList((items) => {
      const oldIndex = getTaskPos(active.id, completeTaskList);
      const newIndex = getTaskPos(over.id, completeTaskList);
      return arrayMove(items, oldIndex, newIndex);
    });
  } else if (isActiveTaskInCurrent && !isOverInCurrent) {
    // Перетаскивание из CurrentTasks в CompletedTasks
    const taskToMove = taskList.find((task) => task.id === active.id);
    setTaskList((items) => items.filter((task) => task.id !== active.id));
    setCompleteTaskList((items) => [...items, taskToMove]);
  } else if (!isActiveTaskInCurrent && isOverInCurrent) {
    // Перетаскивание из CompletedTasks в CurrentTasks
    if (taskList.length === 0) {
      // Запрещаем перенос, если в CurrentTasks нет задач
      return;
    }
    const taskToMove = completeTaskList.find((task) => task.id === active.id);
    setCompleteTaskList((items) =>
      items.filter((task) => task.id !== active.id)
    );
    setTaskList((items) => [...items, taskToMove]);
  }
};
