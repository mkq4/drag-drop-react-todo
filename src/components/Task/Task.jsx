/* eslint-disable react/prop-types */
import cl from "./Task.module.css";
import trash from "../../assets/images/trash.svg";
import arrow from "../../assets/images/arrow.svg";
import checkbox from "../../assets/images/checkbox.svg";

const Task = ({ task, remove, complete, back, backToComplete, isHovered }) => {
  return (
    <div
      className={`${cl.Task} ${isHovered ? cl.TaskHovered : ""}`} // Добавляем класс при наведении
    >
      {back ? (
        <img
          onClick={() => backToComplete(task)}
          src={arrow}
          className={`${cl.Task__complete_back} ${cl.Task__complete_back_arrow}`}
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
