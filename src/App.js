import MyApp from './MyApp';
import { TaskProvider } from './context/task/TaskContext';
import { AlertProvider } from './context/alert/AlertContext';

const App = () => {
  // filter tasks
  // const filterTasks = (text) => {
  //   setFiltered(text);
  //   if (text !== '') {
  //     const newTasks = tasks.filter((task) => {
  //       return Object.values(task)
  //         .join(' ')
  //         .toLowerCase()
  //         .includes(text.toLowerCase());
  //     });
  //     setSearchResults(newTasks);
  //   } else {
  //     setSearchResults(tasks);
  //   }
  // };

  // clear all tasks

  return (
    <TaskProvider>
      <AlertProvider>
        <div className="container">
          <MyApp />
        </div>
      </AlertProvider>
    </TaskProvider>
  );
};

export default App;
