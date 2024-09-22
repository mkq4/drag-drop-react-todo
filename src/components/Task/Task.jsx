/* eslint-disable react/prop-types */
import cl from "./Task.module.css";
import trash from '../../assets/images/trash.svg'
import arrow from '../../assets/images/arrow.svg'

const Task = ({ task, remove, complete, back, backToComplete }) => {
  return (
    <div className={cl.Task}>
      
      {back 
      
      ? <img onClick={() => backToComplete(task)} src={arrow} className={cl.Task__complete_back}/>
      : <div onClick={() => complete(task)} className={cl.Task__complete_back}></div>
      }

      <p>{task.text}</p>
      <div className={cl.Task__nav}>
        <img onClick={() => remove(task)} style={{width: "30px", cursor: "pointer"}} src={trash} className={cl.Task__delete}/>
      </div>
    </div>
  );
};

export default Task;
