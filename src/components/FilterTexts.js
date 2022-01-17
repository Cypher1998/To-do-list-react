import { useContext, useRef } from 'react';
import TaskContext from '../context/task/TaskContext';

const FilterText = () => {
  const { filtered, filterTasks } = useContext(TaskContext);
  const labelText = useRef();

  const onFilterFocus = () => {
    const label = labelText.current;
    label.style.transform = 'translateY(0rem)';
    label.style.color = 'green';
    label.style.fontSize = '0.6rem';
  };

  const onFilterBlur = () => {
    const label = labelText.current;
    label.style.transform = 'translateY(1.5rem)';
    label.style.color = '#aaa';
    label.style.fontSize = '0.7rem';
  };

  const getSearchTerm = (e) => {
    filterTasks(e.target.value);
  };

  return (
    <div>
      <label ref={labelText}>Filter Tasks</label>
      <input
        type="text"
        onFocus={onFilterFocus}
        onBlur={onFilterBlur}
        value={filtered}
        onChange={getSearchTerm}
      />
    </div>
  );
};

export default FilterText;
