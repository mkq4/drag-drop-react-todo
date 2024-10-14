import Header from "../components/Header/Header";
import Button from "../components/UI/Button/Button";
import Container from "../Container";
import cl from "../App.module.css";
import { useState } from "react";
import TaskList from "../components/Task/TaskList";
import CompletedTasks from "../components/Task/CompletedTasks";
import {
  addTask,
  completeTask,
  remove,
  backToComplete,
} from "../services/task.servise";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const HomePage = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, text: "text" },
    { id: 2, text: "text2" },
    { id: 3, text: "text3" },
  ]);
  const [completeTaskList, setCompleteTaskList] = useState([]);

  const [task, setTask] = useState("");

  const getTaskPos = (id, list) => list.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Проверяем, что active и over определены
    if (!active || !over || active.id === over.id) return;

    // Проверяем, в каком списке находится перетаскиваемая задача
    const activeTask = taskList.find((task) => task.id === active.id)
      ? taskList
      : completeTaskList;

    const setActiveList =
      activeTask === taskList ? setTaskList : setCompleteTaskList;

    const getActivePos = (id) =>
      activeTask === taskList
        ? getTaskPos(id, taskList)
        : getTaskPos(id, completeTaskList);

    // Если active и over принадлежат разным спискам, используем разную логику
    setActiveList((tasks) => {
      const originalPos = getActivePos(active.id);
      const newPos = getActivePos(over.id);

      // if (originalPos === -1 || newPos === -1) return tasks; // Защита от ошибок

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <Container>
      <Header />
      <main>
        <section className={cl.addTask}>
          <h2>Add new task</h2>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className={cl.addTask__input}
          />
          <div className={cl.addTask__button}>
            <Button
              onClick={() => {
                addTask(
                  { id: taskList.length + 1, text: task },
                  setTaskList,
                  taskList,
                  setTask
                );
              }}
            >
              Add task
            </Button>
          </div>
        </section>
        <section className={cl.tasks}>
          <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
          >
            <TaskList
              complete={(task) =>
                completeTask(
                  task,
                  setCompleteTaskList,
                  completeTaskList,
                  setTaskList,
                  taskList
                )
              }
              remove={(task) => remove(task, setTaskList, taskList)}
              taskList={taskList}
            />
          </DndContext>
          <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
          >
            <CompletedTasks
              remove={(task) =>
                remove(task, setCompleteTaskList, completeTaskList)
              }
              taskList={completeTaskList}
              backToComplete={(task) =>
                backToComplete(
                  task,
                  setTaskList,
                  taskList,
                  setCompleteTaskList,
                  completeTaskList
                )
              }
            />
          </DndContext>
        </section>
      </main>
    </Container>
  );
};

export default HomePage;

