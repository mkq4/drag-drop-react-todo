/* eslint-disable react/prop-types */

import Task from "./Task";
import cl from "./Task.module.css";
const TaskList = ({ taskList, remove, complete, setTaskList }) => {
  
  return (
    <div className={cl.CurrentTasks}>
      <h2>Current tasks</h2>
      <div className={cl.CurrentTasksItems}>
        {taskList < 1 ? (
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            there`s nothing
          </p>
        ) : (
          taskList.map((el) => {
            return (
              <Task
                task={el}
                key={el.id}
                id={el.id}
                remove={remove}
                complete={complete}
                back={false}
                setTaskList={setTaskList}
                taskList={taskList}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskList;