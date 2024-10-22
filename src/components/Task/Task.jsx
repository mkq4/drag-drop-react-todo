/* eslint-disable react/prop-types */
import cl from "./Task.module.css";
import trash from "../../assets/images/trash.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ task, id, remove, complete, back, backToComplete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition};
  console.log(style)
  return (
    <div
      className={cl.Task}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <input
        type="checkbox"
        checked={back}
        onChange={() => {
          if (back) {
            backToComplete(task);
          } else {
            complete(task);
          }
        }}
        className={cl.Task__checkbox}
        onPointerDown={(e) => e.stopPropagation()}
      />

      <p className={cl.Task__text}>{task.text}</p>

      <div className={cl.Task__nav}>
        <img
          onClick={() => remove(task)}
          src={trash}
          className={cl.Task__delete}
          onPointerDown={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default Task;
