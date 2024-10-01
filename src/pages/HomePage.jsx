import Header from "../components/Header/Header";
import Button from "../components/UI/Button/Button";
import Container from "../Container";
import cl from "../App.module.css";
import { useState } from "react";
import TaskList from "../components/Task/TaskList";
import CompletedTasks from "../components/Task/CompletedTasks";

const HomePage = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, order: 1, text: "vkinut snusik" },
    { id: 2, order: 2, text: "shas bbI Gidru pouzat" },
    { id: 3, order: 3, text: "eeeeee tbi nasvai ne trogai eeee" },
  ]);
  const [completeTaskList, setCompleteTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);
  const [draggedFromCompleted, setDraggedFromCompleted] = useState(false); // Новый флаг

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
    setTask("");
  };

  const completeTask = (completedTask) => {
    setCompleteTaskList([...completeTaskList, completedTask]);
    removeCurrentTask(completedTask);
  };

  const backToComplete = (task) => {
    setTaskList([...taskList, task]);
    setCompleteTaskList(completeTaskList.filter((el) => el.id !== task.id));
  };

  const removeCurrentTask = (task) => {
    setTaskList(taskList.filter((el) => el.id !== task.id));
  };

  const removeCompletedTask = (task) => {
    setCompleteTaskList(completeTaskList.filter((el) => el.id !== task.id));
  };

  const onDragStart = (taskId, fromCompleted = false) => {
    setDraggedTask(taskId);
    setDraggedFromCompleted(fromCompleted);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = () => {
    if (draggedFromCompleted) {
      const movedTask = completeTaskList.find((task) => task.id === draggedTask);
      setTaskList([...taskList, movedTask]);
      removeCompletedTask(movedTask);
    }
  };

  const onDropCompleted = () => {
    if (!draggedFromCompleted) {
      const movedTask = taskList.find((task) => task.id === draggedTask);
      setCompleteTaskList([...completeTaskList, movedTask]);
      removeCurrentTask(movedTask);
    }
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
                addTask({
                  id: new Date().getMilliseconds(),
                  text: task,
                  order: new Date().getMilliseconds(),
                });
              }}
            >
              Add task
            </Button>
          </div>
        </section>
        <section className={cl.tasks}>
          <TaskList
            complete={completeTask}
            remove={removeCurrentTask}
            taskList={taskList}
            onDragStart={(taskId) => onDragStart(taskId, false)}
            onDragOver={onDragOver}
            onDrop={onDrop}
          />

          {completeTaskList.length > 0 && (
            <CompletedTasks
              remove={removeCompletedTask}
              taskList={completeTaskList}
              backToComplete={backToComplete}
              onDragStart={(taskId) => onDragStart(taskId, true)}
              onDragOver={onDragOver}
              onDrop={onDropCompleted}
            />
          )}
        </section>
      </main>
    </Container>
  );
};

export default HomePage;
