/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Task from "./Task";
import cl from "./Task.module.css";

const TaskList = ({ taskList, remove, complete, onDragStart, onDragOver, onDrop, hoveredTask }) => {
  return (
    <div className={cl.CurrentTasks}>
      <h2>Current tasks</h2>
      <div className={cl.CurrentTasksItems}>
        {taskList.length < 1 ? (
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            there's nothing
          </p>
        ) : (
          taskList.map((el) => (
            <div
              key={el.id}
              draggable
              onDragStart={() => onDragStart(el.id)}
              onDragOver={(e) => onDragOver(e, el.id)}
              onDrop={() => onDrop(el.id)}
            >
              <Task
                task={el}
                remove={remove}
                complete={complete}
                back={false}
                isHovered={hoveredTask === el.id} // Передаем флаг "наведенной" задачи
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
