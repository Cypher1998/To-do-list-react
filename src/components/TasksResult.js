import Tasks from './Tasks';
import { useContext } from 'react';
import TaskContext from '../context/task/TaskContext';

const TasksResult = () => {
  const { filtered, tasks, searchResults } = useContext(TaskContext);

  return <Tasks tasks={filtered.length < 1 ? tasks : searchResults} />;
};

export default TasksResult;
