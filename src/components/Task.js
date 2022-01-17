import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import TaskContext from '../context/task/TaskContext';

const Task = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <>
      <li className="collection-item">
        {task.text}
        <i
          className="fas fa-times icon"
          onClick={() => deleteTask(task.id)}
        ></i>
      </li>
    </>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
