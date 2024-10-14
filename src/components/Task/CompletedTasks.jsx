/* eslint-disable react/prop-types */
import Task from "./Task";
import cl from "./Task.module.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const CompletedTasks = ({ taskList, remove, backToComplete }) => {
  if (!taskList.length) {
    return <></>;
  }

  return (
    <div className={cl.CompletedTasks}>
      <SortableContext items={taskList} strategy={verticalListSortingStrategy}>
        <h2>Completed tasks</h2>
        <div className={cl.CompletedTasksItems}>
          {taskList.map((el) => {
            return (
              <Task
                id={el.id}
                backToComplete={backToComplete}
                remove={remove}
                task={el}
                key={el.id}
                back={true}
              />
            );
          })}
        </div>
      </SortableContext>
    </div>
  );
};

export default CompletedTasks;
