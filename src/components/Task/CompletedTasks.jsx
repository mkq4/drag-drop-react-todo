/* eslint-disable react/prop-types */
import Task from "./Task";
import cl from "./Task.module.css";
const CompletedTasks = ({taskList, remove, backToComplete}) => {
  if(!taskList.length) {
    return <></>
  }
  return (
    <div className={cl.CompletedTasks}>
      <h2>Completed tasks</h2>
      <div className={cl.CompletedTasksItems}>
        
        {taskList.map((el) => {
          return <Task backToComplete={backToComplete} remove={remove} task={el} key={el.id} back={true}/>
        })}
    </div>
    </div>
  )
}
export default CompletedTasks