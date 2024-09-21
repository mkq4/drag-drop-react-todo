/* eslint-disable react/prop-types */
import Task from './Task'
// import cl from "./Task.module.css";
const TaskList = ({taskList, remove}) => {
    if(!taskList.length) {
        return (
            <h3 style={{textAlign: "center"}}>Заданий нет</h3>
        )
    }
  return (
    <>
        {taskList.map((el) => {
            return  <Task task={el} key={el.id} remove={remove}/>
        })}
    </>
  )
}

export default TaskList