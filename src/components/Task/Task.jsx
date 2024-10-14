/* eslint-disable react/prop-types */
import cl from "./Task.module.css";
import trash from "../../assets/images/trash.svg";
import arrow from "../../assets/images/arrow.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ task, id, remove, complete, back, backToComplete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      className={cl.Task}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {back ? (
        <img
          onClick={() => backToComplete(task)}
          src={arrow}
          className={cl.Task__complete_back}
        />
      ) : (
        <div
          onClick={() => complete(task)}
          className={cl.Task__complete_back}
        ></div>
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
