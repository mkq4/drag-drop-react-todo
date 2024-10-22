/* eslint-disable react/prop-types */
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "./Task";
import cl from "./Task.module.css";

const TaskList = ({ taskList, remove, complete, setTaskList }) => {
  return (
    <div className={cl.CurrentTasks}>
      <h2>Current tasks</h2>
      <div className={cl.CurrentTasksItems}>
        {/* Убрано условие с выводом "there's nothing" */}
        <SortableContext items={taskList} strategy={verticalListSortingStrategy}>
          {taskList.map((el) => (
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
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default TaskList;
