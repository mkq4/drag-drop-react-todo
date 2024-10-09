import Header from "../components/Header/Header";
import Button from "../components/UI/Button/Button";
import Container from "../Container";
import cl from "../App.module.css";
import TaskList from "../components/Task/TaskList";
import CompletedTasks from "../components/Task/CompletedTasks";
import { useTaskManager } from "../hook/useTasksManager.hook";
import { useState } from "react";

const HomePage = () => {
  const {
    taskList,
    completeTaskList,
    handleAddTask,
    handleRemoveTask,
    handleCompleteTask,
    handleBackToTaskList,
    handleDragStart,
    handleDrop,
    hoveredTask,
    setHoveredTask
  } = useTaskManager([
    { id: 1, order: 1, text: "task1" },
    { id: 2, order: 2, text: "task2 task2 task2" },
    { id: 3, order: 3, text: "task3 task3 task3 task3" }
  ]);

  const [task, setTask] = useState("");

  // Функция для обработки перетаскивания
  const handleDragOver = (e, taskId) => {
    e.preventDefault();
    setHoveredTask(taskId);
  };

  // Функция для обработки сброса перетаскиваемого элемента
  const handleDropInCompleted = (targetId) => {
    // Здесь вы можете реализовать логику для перемещения задач в списке Completed
    console.log("Dropped on:", targetId);
    setHoveredTask(null); // Сброс hoveredTask
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
                handleAddTask({
                  id: new Date().getMilliseconds(),
                  text: task,
                  order: new Date().getMilliseconds(),
                });
                setTask("");
              }}
            >
              Add task
            </Button>
          </div>
        </section>
        <div className={cl.tasksSections}>
          <section
            className={cl.taskListContainer}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => setHoveredTask(null)}
          >
            <TaskList
              complete={handleCompleteTask}
              remove={handleRemoveTask}
              taskList={taskList}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              hoveredTask={hoveredTask}
            />
          </section>

          <section className={cl.completedTaskContainer}>
            {completeTaskList.length > 0 && (
              <CompletedTasks
                remove={handleRemoveTask}
                taskList={completeTaskList}
                backToComplete={handleBackToTaskList}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver} // Передача onDragOver
                onDrop={handleDropInCompleted} // Передача onDrop
                hoveredTask={hoveredTask}
              />
            )}
          </section>
        </div>
      </main>
    </Container>
  );
};

export default HomePage;
