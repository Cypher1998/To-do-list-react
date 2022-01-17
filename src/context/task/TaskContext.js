import { createContext, useState, useEffect } from 'react';
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filtered, setFiltered] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showPage, setShowPage] = useState(false);

  // update UI with LS
  useEffect(() => {
    const storedTasks = getItem('tasks');
    const getText = getItem('text');
    setShowPage(getText);
    if (storedTasks) {
      setTasks(storedTasks);
    }

    // eslint-disable-next-line
  }, []);

  // get item from LS
  const getItem = (item) => {
    return JSON.parse(localStorage.getItem(item));
  };

  // set item to LS
  const setItem = (tasks, items) => {
    localStorage.setItem(tasks, JSON.stringify(items));
  };

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };

    // get tasks from LS
    const storedTasks = getItem('tasks');
    storedTasks.push(newTask);

    // set Tasks back to LS
    setItem('tasks', storedTasks);

    // update state
    setTasks(storedTasks);
  };

  // filterTasks
  const filterTasks = (text) => {
    setFiltered(text);
    if (text !== '') {
      const newTasks = tasks.filter((task) => {
        return task.text.toLowerCase().includes(text.toLowerCase());
      });

      setSearchResults(newTasks);
    } else {
      setSearchResults(tasks);
    }
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    const getTasks = getItem('tasks');
    getTasks.forEach((task, index) => {
      if (task.id === id) {
        getTasks.splice(index, 1);
        setItem('tasks', getTasks);
      }
    });
  };

  // clear all tasks
  const clearTasks = () => {
    const confirmBox = window.confirm(
      'Are you sure you want to remove all tasks?'
    );
    if (confirmBox === true) {
      setTasks([]);
    }
  };

  // toggle page
  const togglePage = () => {
    setItem('text', !showPage);
    setShowPage(!showPage);
  };

  return (
    <TaskContext.Provider
      value={{
        filtered,
        tasks,
        searchResults,
        showPage,
        addTask,
        clearTasks,
        deleteTask,
        filterTasks,
        togglePage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
