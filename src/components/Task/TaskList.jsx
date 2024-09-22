/* eslint-disable react/prop-types */
import Task from './Task'
import cl from "./Task.module.css";
const TaskList = ({taskList, remove, complete}) => {

  return (
    <div className={cl.CurrentTasks}>  
        <h2>Current tasks</h2>
        <div className={cl.CurrentTasksItems}>
            {taskList.map((el) => {
                return  <Task task={el} key={el.id} remove={remove} complete={complete} back={false}/>
            })}
        </div>

    </div>
  )
}

export default TaskList