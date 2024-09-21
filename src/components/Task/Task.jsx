/* eslint-disable react/prop-types */
import cl from "./Task.module.css";
import trash from '../../assets/images/trash.svg'
// eslint-disable-next-line react/prop-types
const Task = ({ task, remove }) => {
  return (
    <div className={cl.Task}>
      <span>{task.id}</span>
      <p>{task.text}</p>
      <img onClick={() => remove(task)} style={{width: "30px", cursor: "pointer"}} src={trash} className={cl.Task__delete}/>
    </div>
  );
};

export default Task;
