import Header from "../components/Header/Header";
import Button from "../components/UI/Button/Button";
import Container from "../Container";
import cl from "../App.module.css";
import { useState } from "react";
import TaskList from "../components/Task/TaskList";
const HomePage = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      text: "feed a dog",
    },
    {
      id: 2,
      text: "wash the dish",
    },
    {
      id: 3,
      text: "do homework",
    },
  ]);
  const [task, setTask] = useState("");
  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
    setTask("")
  };
  const remove = (task) => {
    setTaskList(taskList.filter((el) => el.id !== task.id))
  }
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
                addTask({ id: taskList.length + 1, text: task });
              }}
            >
              Add task
            </Button>{" "}
          </div>
        </section>
        <section className={cl.tasks}>
            <TaskList remove={remove} taskList={taskList}/>
        </section>
      </main>
    </Container>
  );
};

export default HomePage;
