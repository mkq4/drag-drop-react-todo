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
  const [hoveredTask, setHoveredTask] = useState(null);
  const [hoveredCompletedTask, setHoveredCompletedTask] = useState(null);

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

  const onDragStart = (taskId) => {
    console.log("onDragStart")
    setDraggedTask(taskId);
  };

  const onDragOver = (event, taskId) => {
    console.log("onDragOver")
    event.preventDefault();
    setHoveredTask(taskId);
  };

  const onDragOverCompleted = (event, taskId) => {
    console.log("onDragOverCompleted")
    event.preventDefault();
    setHoveredCompletedTask(taskId);
    console.log("onDragOverCompleted")
  };

  const onDrop = (targetTaskId) => {
    console.log("onDrop")
    const draggedItem = taskList.find((task) => task.id === draggedTask);
    const targetItem = taskList.find((task) => task.id === targetTaskId);

    const newTaskList = taskList.map((task) => {
      if (task.id === targetTaskId) {
        return { ...task, order: draggedItem.order };
      }
      if (task.id === draggedTask) {
        return { ...task, order: targetItem.order };
      }
      return task;
    });

    setTaskList(newTaskList.sort((a, b) => a.order - b.order));
    setHoveredTask(null);
  };

  const onDropCompleted = (targetTaskId) => {
    // Логика для обновления порядка завершенных задач
    const draggedItem = completeTaskList.find((task) => task.id === draggedTask);
    const targetItem = completeTaskList.find((task) => task.id === targetTaskId);

    const newCompletedTaskList = completeTaskList.map((task) => {
      if (task.id === targetTaskId) {
        return { ...task, order: draggedItem.order };
      }
      if (task.id === draggedTask) {
        return { ...task, order: targetItem.order };
      }
      return task;
    });

    setCompleteTaskList(newCompletedTaskList.sort((a, b) => a.order - b.order));
    setHoveredCompletedTask(null);
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
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            hoveredTask={hoveredTask}
          />

          {completeTaskList.length > 0 && (
            <CompletedTasks
              remove={removeCompletedTask}
              taskList={completeTaskList}
              backToComplete={backToComplete}
              onDragStart={onDragStart}
              onDragOver={onDragOverCompleted} 
              onDrop={onDropCompleted}
              hoveredTask={hoveredCompletedTask}
            />
          )}
        </section>
      </main>
    </Container>
  );
};

export default HomePage;
