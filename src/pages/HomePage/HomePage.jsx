import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import Container from "../../Container";
import cl from "../../App.module.css";
import { useState } from "react";
import TaskList from "../../components/Task/TaskList";
import CompletedTasks from "../../components/Task/CompletedTasks";
import {
  addTask,
  completeTask,
  remove,
  backToComplete,
  handleDragEnd, // Импортируем новую функцию
} from "../../services/task.servise";
import { closestCorners, DndContext } from "@dnd-kit/core";

const HomePage = () => {
  const [taskList, setTaskList] = useState([
    { id: Math.floor(new Date().getTime() / 1000), text: "text" },
    { id: Math.floor(new Date().getTime() / 1000) + 2, text: "text2" },
    { id: Math.floor(new Date().getTime() / 1000) + 1, text: "text3" },
  ]);

  const [completeTaskList, setCompleteTaskList] = useState([]);

  const [task, setTask] = useState("");

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
                  { id: Math.floor(new Date().getTime() / 1000), text: task },
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
            onDragEnd={(event) =>
              handleDragEnd(
                event,
                taskList,
                setTaskList,
                completeTaskList,
                setCompleteTaskList
              )
            }
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
