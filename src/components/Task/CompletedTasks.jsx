/* eslint-disable react/prop-types */
import Task from "./Task";
import cl from "./Task.module.css";

const CompletedTasks = ({ taskList, remove, backToComplete, onDragStart, onDragOver, onDrop, hoveredTask }) => {
  return (
    <div className={cl.CompletedTasks}>
      <h2>Completed tasks</h2>
      <div className={cl.CompletedTasksItems}>
        {taskList.map((el) => (
          <div
            key={el.id}
            draggable
            onDragStart={() => onDragStart(el.id)}
            onDragOver={(e) => onDragOver(e, el.id)} // Здесь должно быть onDragOver
            onDrop={() => onDrop(el.id)} // Здесь должно быть onDrop
          >
            <Task
              backToComplete={backToComplete}
              remove={remove}
              task={el}
              back={true}
              isHovered={hoveredTask === el.id} // Логика для hover
            />
          </div>

        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
