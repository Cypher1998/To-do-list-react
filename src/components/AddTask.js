import { useRef, useState, useContext } from 'react';
import TaskContext from '../context/task/TaskContext';
import AlertContext from '../context/alert/AlertContext';

const AddTask = () => {
  const [text, setText] = useState('');
  const labelText = useRef();
  const { addTask } = useContext(TaskContext);
  const { setAlert } = useContext(AlertContext);

  const onInputFocus = () => {
    const label = labelText.current;
    label.style.transform = 'translateY(0rem)';
    label.style.color = 'green';
    label.style.fontSize = '0.6rem';
  };

  const onInputBlur = () => {
    const label = labelText.current;
    label.style.transform = 'translateY(1.5rem)';
    label.style.color = '#aaa';
    label.style.fontSize = '0.7rem';
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setAlert('Field cannot be empty!!!', 'alert-danger');
      // alert('Field cannot be empty!!!');
      return;
    }

    addTask({ text: text });
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label ref={labelText}>Add Tasks</label>
      <input
        type="text"
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input type="submit" className="btn add-btn" value="Add Tasks" />
    </form>
  );
};

export default AddTask;
