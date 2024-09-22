/* eslint-disable react/prop-types */
import cl from "./Task.module.css";
import trash from "../../assets/images/trash.svg";
import arrow from "../../assets/images/arrow.svg";
import checkbox from "../../assets/images/checkbox.svg";
import { useState } from "react";

const Task = ({ task, remove, complete, back, backToComplete, setTaskList, taskList }) => {

  const [currentTask, setCurrentTask] = useState('')

  
  function dragStartHandler(e, task) {
    console.log('drag', task)
    setCurrentTask(task) // не меняется карточка
  }
  
  
  
  function dragEndHandler(e) {
    // e.target.style.background = "#fff"
  }
  function dragOverHandler(e) {
    e.preventDefault()
    // e.target.style.background = "#000"
  }

  function dragLeaveHandler (e) {

  }

  function dropHandler(e, task) {
    e.preventDefault()
    // console.log('drop', task)
    console.log(currentTask)
    setTaskList(taskList.map(c => {
      if (c.id === task.id) {
        return {...c, order: currentTask.order}
      }
      if(c.id === currentTask.id) {
        return {...c, order: task.order}
      }

      return c
    }))
  }


  return (
    <div
      draggable
      className={cl.Task}
      onDragStart={(e) => dragStartHandler(e, task)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, task)}
    >
      {back ? (
        <img
          onClick={() => backToComplete(task)}
          src={arrow}
          className={cl.Task__complete_back}
        />
      ) : (
        <img
          onClick={() => complete(task)}
          src={checkbox}
          className={cl.Task__complete_back}
        />
      )}

      <p>{task.text}</p>
      <div className={cl.Task__nav}>
        <img
          onClick={() => remove(task)}
          style={{ width: "30px", cursor: "pointer" }}
          src={trash}
          className={cl.Task__delete}
        />
      </div>
    </div>
  );
};

export default Task;
