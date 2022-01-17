import AddTask from '../components/AddTask';
import Alert from '../components/Alert';
import FilterText from '../components/FilterTexts';
import Button from '../components/Button';
import TasksResult from '../components/TasksResult';
import { useContext } from 'react';
import TaskContext from '../context/task/TaskContext';

const Home = () => {
  const { tasks, clearTasks, showPage } = useContext(TaskContext);

  return (
    <>
      <Alert />
      {showPage && <h3>Enter your tasks in the box below</h3>}
      {showPage && <AddTask />}
      {tasks.length === 0 && <h4 className="">No Tasks To Show</h4>}
      {tasks.length > 0 && <h3 className="tasks">Tasks</h3>}
      {tasks.length > 0 && <FilterText />}
      <TasksResult />
      {tasks.length > 0 && (
        <Button
          text="Clear Tasks"
          color="#9c1313"
          styling="clear-btn"
          onClick={clearTasks}
        />
      )}
    </>
  );
};

export default Home;
