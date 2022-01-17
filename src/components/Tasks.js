import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks }) => {
  return (
    <div>
      <ul className="collection">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
