import Header from "../components/Header/Header";
import Button from "../components/UI/Button/Button";
import Container from "../Container";
import cl from "../App.module.css";
import { useState } from "react";
import TaskList from "../components/Task/TaskList";
import CompletedTasks from "../components/Task/CompletedTasks";

const HomePage = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      order: 1,
      text: "vkinut` snusik",
    },
    {
      id: 2,
      order: 2,
      text: "shas bbI Gidru pouzat",
    },
    {
      id: 3,
      order: 3,
      text: "eeeeee tbi nasvai ne trogai eeee",
    },
  ]);
  const [completeTaskList, setCompleteTaskList] = useState([]);

  const [task, setTask] = useState("");

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
            {" "}
            <Button
              onClick={() => {
                addTask({
                  id: taskList.length + 1,
                  text: task,
                  order: taskList.length + 1,
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
            setTaskList={setTaskList}
          />

          {completeTaskList < 1 ? (
            ""
          ) : (
            <CompletedTasks
              remove={removeCompletedTask}
              taskList={completeTaskList}
              backToComplete={backToComplete}
            />
          )}
        </section>
      </main>
    </Container>
  );
};

export default HomePage;
